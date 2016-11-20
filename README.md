# postcss-em-media-query

[![Build Status][ci-img]][ci]

[PostCSS][postcss] plugin for transforming min/max-width/height media queries to ems.

## Install

```sh
npm install postcss-em-media-query --save
```

## Usage

```js
const postcss = require('postcss');
const emMediaQuery = require('postcss-em-media-query');

postcss([
	emMediaQuery({ /* options */ })
]);
```

```css
/* Before */

@media screen and (min-width:600px) and (max-width:739px) {
	.foo {
		color:red;
	}
}

/* After */

@media screen and (min-width:37.5em) and (max-width:46.1875em) {
	.foo {
		color:red;
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

[ci]: https://travis-ci.org/niksy/postcss-em-media-query
[ci-img]: https://img.shields.io/travis/niksy/postcss-em-media-query.svg
[postcss]: https://github.com/postcss/postcss
