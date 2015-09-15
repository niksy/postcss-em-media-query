# PostCSS em media query [![Build Status][ci-img]][ci]

[PostCSS] plugin for transforming min/max-width/height media queries to ems.

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

## Installation

```sh
npm install postcss-em-media-query --save-dev
```

## Usage

```js
postcss([ require('postcss-em-media-query')({ /* options */ }) ])
```

## Options

#### `precision`

Type: `Integer`  
Default: `5`

Rounding precision for values.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
