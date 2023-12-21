/*
//commonjs
const value = require("./Module1_in_JavaScript");

//value();
value.hello();
value.Ahello("Rohit");
*/


/*
//using destructuring and commonjs
const { hello, Ahello } = require("./Module1_in_JavaScript");
hello();
Ahello("Rohit");
*/

//ES6 Modules
import value ,{ hello, Ahello } from "./Module2_in_JavaScript.js";
hello();
Ahello("Rohit");
value();


