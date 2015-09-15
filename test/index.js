/* jshint mocha:true  */

var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var assert = require('assert');
var plugin = require('../');

function test ( name, opts, done ) {
	var fixtureDir = './test/fixtures/';
	var baseName   = name.split(':')[0];
	var testName   = name.split(':').join('.');
	var inputPath  = path.resolve(fixtureDir + baseName + '.css');
	var actualPath = path.resolve(fixtureDir + testName + '.actual.css');
	var expectPath = path.resolve(fixtureDir + testName + '.expect.css');

	var inputCSS  = fs.readFileSync(inputPath, 'utf8');
	var expectCSS = fs.readFileSync(expectPath, 'utf8');

	postcss([plugin(opts)]).process(inputCSS, {
		from: inputPath
	}).then(function (result) {
		var actualCSS = result.css;

		fs.writeFileSync(actualPath, actualCSS);

		assert.equal(actualCSS, expectCSS);
		assert.equal(result.warnings().length, 0);

		done();
	}).catch(function (error) {
		done(error);
	});
}

describe('postcss-em-media-query', function () {

	it('screen and (min-{width/height}:{value})', function ( done ) {
		test('min', {}, done);
	});

	it('screen and (max-{width/height}:{value})', function ( done ) {
		test('max', {}, done);
	});

	it('screen and (min-{width/height}:{value}), screen and (min-{width/height}:{value})', function ( done ) {
		test('min-multiple', {}, done);
	});

	it('(min-{width/height}:{value}), screen and (min-{width/height}:{value}) / screen and (min-{width/height}:{value}), (min-{width/height}:{value})', function ( done ) {
		test('min-combination', {}, done);
	});

	it('screen and (min-{width/height}:{value}) and (max-{width/height}:{value})', function ( done ) {
		test('min-max', {}, done);
	});

	it('precision: 3', function ( done ) {
		test('precision', { precision: 3 }, done);
	});

});
