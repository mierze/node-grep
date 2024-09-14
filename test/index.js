const { exec } = require('child_process');
const assert = require('assert');
const mocha = require('mocha');

// TODO add cases to handle nothing found, improper use of args, etc.
describe('node.js grep', () => {
	it('should work with default arguments and a single match', (done) => {
		exec('node ./src/index.js -C 1 examples/example.txt City', (error, stdout, stderr) => {
			assert.ifError(error);
			assert.equal(stdout.trim(), 'Houston, Texas\nOklahoma City, Oklahoma\nKansas City, Missouri\nPhoenix, Arizona');
			assert.equal(stderr.trim(), '');
			done();
		});
	});
});
