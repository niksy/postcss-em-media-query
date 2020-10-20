import emMediaQuery from 'em-media-query';

const plugin = (options) => {
	return {
		postcssPlugin: 'postcss-em-media-query',
		AtRule: {
			media: (rule) => {
				rule.params = emMediaQuery(rule.params, options);
			}
		}
	};
};
plugin.postcss = true;

export default plugin;
