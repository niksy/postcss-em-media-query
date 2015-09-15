var postcss = require('postcss');
var parse = require('postcss-value-parser');
var round = require('lodash/math/round');

module.exports = postcss.plugin('postcss-em-media-query', function ( opts ) {

	opts = opts || {};
	opts.precision = opts.precision || 5;

	return function ( css, result ) {
		css.walkAtRules(function ( rule ) {

			var ast = parse(rule.params);

			if ( rule.name === 'media' ) {

				ast.walk(function ( node, index, nodes ) {

					if ( node.type === 'function' ) {

						var values = node.nodes;
						var minMax = values.some(function ( item ) {
							return /(?:min|max)\-(?:width|height)/.test(item.value);
						});

						// If we are working with min/max-width/height query
						if ( minMax ) {
							values

								// Work only with pixel values
								.filter(function ( item ) {
									var value = parse.unit(item.value);
									return item.type === 'word' && (value && value.unit === 'px');
								})

								// Convert to ems
								.map(function ( item ) {
									var value = parse.unit(item.value);
									item.value = [round(Number(value.number)/16, opts.precision), 'em'].join('');
									return item;
								});
						}

					}

				});

				rule.params = ast.toString();

			}

		});
	};

});
