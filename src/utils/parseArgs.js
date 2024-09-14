/**
 * Takes in all the node.js invocation arguments and smartly parses them
 *
 * @param {any[]} args - node.js invocation arguments array
 * @returns {int, string, string} {contextLines, fileName, query} Returns the arguments needed to perform the grep
 */
module.exports = function parseArgs(args) {
	// check min inputs are satisfied, if not return an empty structure to be handled
	if (args.length < 4) {
		return { contextLines: 0, fileName: "", query: "" }
	}
	args.splice(0, 2); // removing unneeded section

	for (let el of args) {
		// TODO parse better than below which will error if some isn't provided
	}
	// could just assert the proper length and that [1] is parsable to int

	return { contextLines: Number.parseInt(args[1]), fileName: args[2], query: args[3] }
}
