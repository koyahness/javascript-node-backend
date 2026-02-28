/*

Prerequisites:
Javascript fundamentals (functions, loops, objects, classes etc)
Asynchronous programming - promises, callbacks, async/await
HTTP basics (methods, status codes etc)
How JSON APIs work
NPM (node package manager)

V8 JS engine: node is built on V8 JS engine (that is written in C++) the same engine that powers google chrome. Other browsers have their own engines like on firefox there is Spider MOnkey, safari has  javascript core. engines takes JS code and converts it to machine code.

Non-blocking: it doesnt wait around for i/o operations, which network calls, file system operations, database operates.... uses events and callbacks.... hence fast and efficient

single threaded:

event loop: allow node to peform non-blocking non-operations

uses of node: building APIs, server-rendered apps, real-time applications, microservices, commandline tools, bots, web scraping, web servers
 NOT GOOD FOR CPU INTENSIVE TASKS

 node --version #to check installed

 npm -v #come with nodejs used to install 3rd party packages

 to run commandline javasript environment not going through a file or the browser, run node

 ############### initialise node in a repo use using npm init -y; this will create a package.json file needed when creating apps or project ####  -y will say yes to all questions asked

 INDEX.JS >>>>>>> the main files that you will run: entry point into which other files will be imported into

 to run code in the commandline >>>>>> node index.js or node index 

*/

// import generateRandomNumber from './utils'; // there is no need to use the .js at the end
// const generateRandomNumber = require('./utils'); // there is no need to use the .js at the end import single function
const {celciusToFahrenheit, generateRandomNumber} = require('./utils'); // there is no need to use the .js at the end
// import generateRandomNumber from './utils'; // there is no need to use the .js at the end

console.log('Random Number: ', generateRandomNumber(), "whose F value is :", celciusToFahrenheit(generateRandomNumber()));



