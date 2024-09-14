/**
 * Find all matching lines for the search query
 *
 * @param {string} query - search term from user command line
 * @param {string[]} fileContent - array of lines from the file the user provided
 * @returns {int[]}  an array of indexes of the matching lines
 */
module.exports = function findMatches({ query, fileContent }) {
	const matches = [];
	for (let lineNum = 0; lineNum < fileContent.length; lineNum++) {
		if (fileContent[lineNum].includes(query)) {
			matches.push(lineNum);
		}
	}
	return matches;
}
