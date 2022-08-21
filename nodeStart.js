/* 
Node is a environment for run javascript outside the browser

====================
 NODE CARACTERISTICS
====================

- No DOM and window object
- server side apps
- has a fileSystem
- Has versions
- use commonJS instead ES6 modules

=====================
RUN NODE CODE
=====================
REPL : READ EVAL PRINT LOOP
-  type node and press enter in the console
CLI : COMMAND LINE INTERFACE
- create a project and run your js files with node, cd and 
drag and drop your project or paste the file route
-node fileName
-----------------------
First Hello World!
-----------------------
console.log("Hello World");

===========================
BASIC NODE GLOBALS variables
============================
Provide info about our project

console.log(__dirname); // path to current directory
console.log(__filename);
console.log(require); // function to use modules (CommonJs)
console.log(module); // info about current module(file)
console.log(process); // info about environment where the program is beign executed

====================
MODULES and REQUIRE
====================
Different files where you have code.
- Node uses commonJs (library under the hood), where every file is module (byDefault)
- Modules - encapsulated code (only share minimum);
- whe can have modules for utils functions and variables for example
and call the funcitons and use the variables in another file

console.log(module)
- whe have here id, path, exports object, parent, filename, etc

A way to export the functions and variables as a module, and use it in another file is:
- module.exports = {variable1, variable2}

The way we use that module is by:

const variables = require('./variableModuleExportFile');
const {variable1, variable2} = require('./variableModuleExportFile')
console.log(variables) // console {variable1, variable2};

- another way to export is  with export as you go

module.exports.items = ['item1', 'item2'];

const person = {
    name: 'Edd',
}
// we creates a variable export an we assign to it a variable or function
module.exports.singlePerson = person;

----------------
mind grenade
---------------
when you have a module with a function and  its call
you can require(./path) without assing it to a function.
So you can execute a funcion that is called in another file, if it has a call 
and you are requireing it without saveign its value in a variable
*/
