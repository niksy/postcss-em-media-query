# postcss-em-media-query

[![Build Status][ci-img]][ci]

[PostCSS][postcss] plugin for transforming min/max-width/height media queries to
ems.

## Install

```sh
npm install postcss postcss-em-media-query --save
```

## Usage

```js
import postcss from 'postcss';
import emMediaQuery from 'postcss-em-media-query';

postcss([
	emMediaQuery({
		/* options */
	})
]);
```

```css
/* Before */

@media screen and (min-width: 600px) and (max-width: 739px) {
	.foo {
		color: red;
	}
}

/* After */

@media screen and (min-width: 37.5em) and (max-width: 46.1875em) {
	.foo {
		color: red;
	}
}
```

## Options

### `precision`

Type: `Integer`  
Default: `5`

Rounding precision for values.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://travis-ci.com/niksy/postcss-em-media-query
[ci-img]: https://travis-ci.com/niksy/postcss-em-media-query.svg?branch=master
[postcss]: https://github.com/postcss/postcss

<!-- prettier-ignore-end -->
