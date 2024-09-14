const utils = require('./utils'); // all our helper functions are tucked away to keep this logic easy to read

/**
 * Root level main function that procedurally tackles all the requirements in the grep problem statement
 *
 * @param {any[]} args - Array of optional parameters supplied when invoking the program via command line 
 * @returns {void}
 */
async function main(args) {
	// parse args
	const opts = utils.parseArgs(args);

	// reading file
	const fileContent = await utils.readFile(opts.fileName);

	// find matches
	const matches = utils.findMatches({ query: opts.query, fileContent });

	// apply context
	const matchesWithContext = utils.applyContext({ matches, fileContent, contextLines: opts.contextLines });

	// this is now our final result, let's log it
	console.log(matchesWithContext);
}

main(process.argv);
