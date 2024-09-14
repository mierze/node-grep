/**
 * Now that we know the query matched line numbers we can smartly create a return with the context added around them 
 *
 * @param {int[], string[], int} { matches, fileContent, contextLines } - Object with the matched line numbers array, original file content as an array of lines, and the context lines to include above / below 
 * @returns {string} Final output string with surrounding context 
 */
module.exports = function applyMatches({ matches, fileContent, contextLines }) {
	// base case, easy return to take care of this
	if (matches.length === 0) {
		return "";
	}

	const addedLines = new Set(); // using a set to keep unique lines, no dupes 

	// inner helper function to add all unique lines 
	function addContextLines(index, distance) {
		const start = Math.max(0, index - distance);
		const end = Math.min(fileContent.length, index + distance + 1);
		for (let i = start; i < end; i++) {
			addedLines.add(i);
		}
	}

	// for each match get it's context 
	for (let match of matches) {
		addContextLines(match, contextLines);
	}

	// compiling the final output with our set 
	let finalOutput = Array.from(addedLines)
		.sort((a, b) => a - b) // proper order 0->last 
		.map(index => fileContent[index])
		.join('\n');

	return finalOutput.trim(); // take off that last new line 
}
