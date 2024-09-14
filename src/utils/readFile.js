const fs = require('fs');

/**
 * Takes in a fileName asynchronously and returns it's contents
 *
 * @param {string} fileName - The name of the file to retrieve contents of.
 * @returns {string[]} Our file broken up into strings of it's lines
 */
module.exports = function readFile(fileName) {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, (err, content) => {
			if (err) {
				return reject(err);
			}
			content = content.toString('utf8').trim(); // converting to proper format
			return resolve(content.split('\n')); // for making it easier to work with for our use case
		})
	})
}
