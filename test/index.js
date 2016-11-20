const assert = require('assert');
const fs = require('fs');
const pify = require('pify');
const postcss = require('postcss');
const fn = require('../');

function runPostcss ( file, opts ) {
	return pify(fs.readFile)(file, 'utf8')
		.then(( css ) => {
			return postcss([
				fn(opts)
			]).process(css);
		});
}

function runTest ( testCase, opts ) {
	return Promise.all([
		pify(fs.readFile)(`./test/fixtures/${testCase}.expected.css`, 'utf8'),
		runPostcss(`./test/fixtures/${testCase}.css`, opts)
	])
			.then(( res ) => {
				assert.equal(res[0].trim(), res[1].css.trim());
			});
}

it('screen and (min-{width/height}:{value})', function () {
	return runTest('min', {});
});

it('screen and (max-{width/height}:{value})', function () {
	return runTest('max', {});
});

it('screen and (min-{width/height}:{value}), screen and (min-{width/height}:{value})', function () {
	return runTest('min-multiple', {});
});

it('(min-{width/height}:{value}), screen and (min-{width/height}:{value}) / screen and (min-{width/height}:{value}), (min-{width/height}:{value})', function () {
	return runTest('min-combination', {});
});

it('screen and (min-{width/height}:{value}) and (max-{width/height}:{value})', function () {
	return runTest('min-max', {});
});

it('precision: 3', function () {
	return runTest('precision', { precision: 3 });
});
