'use strict';

const postcss = require('postcss');
const emMediaQuery = require('em-media-query');

module.exports = postcss.plugin('postcss-em-media-query', ( opts ) => {
	return ( css ) => {
		css.walkAtRules(( rule ) => {
			if ( rule.name === 'media' ) {
				rule.params = emMediaQuery(rule.params, opts);
			}
		});
	};
});
