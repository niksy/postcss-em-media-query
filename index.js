import emMediaQuery from 'em-media-query';

const processed = Symbol('processed');

const plugin = (options) => {
	return {
		postcssPlugin: 'postcss-em-media-query',
		AtRule: {
			media: (rule) => {
				if (!rule[processed]) {
					rule.params = emMediaQuery(rule.params, options);
					rule[processed] = true;
				}
			}
		}
	};
};
plugin.postcss = true;

export default plugin;
