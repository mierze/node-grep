#Node.js Grep

## SETUP / GETTING STARTED
1. ensure node.js is installed on your system
2. `npm i` in root project directory to get all dependencies
3. `npm test` will run the test cases (only 1 for now)
4. `node src/index.js -C <num_context_lines> <file_name> <search_query>` example: `node src/index.js -C 2 examples/example.txt "San Diego"`  


## TODOS / NICE TO HAVES (ran out of time)
- Additional error handling to prevent runtime crashes with any input from user / invalid example files
- More test cases
- More flexibility with input arguments
- pkg or another method of compiling to an executable
- improving speed and performance

