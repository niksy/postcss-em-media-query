import emMediaQuery from 'em-media-query';

export default (options) => {
	return {
		postcssPlugin: 'postcss-em-media-query',
		AtRule: {
			media: (rule) => {
				rule.params = emMediaQuery(rule.params, options);
			}
		}
	};
};

export const postcss = true;
