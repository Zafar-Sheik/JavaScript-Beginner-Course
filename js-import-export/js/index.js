//-------------------------UNDERSTAND THE DIFFERENCE BETWEEN IMPORT AND REQUIRE-----------------------------

/*- In the past, we used "require" to import and use code from other files. 
  - NOW WE HAVE IMPORT AND EXPORT. 
  - We can import and export code from one file and import in another file.
  - Also allows you to only import certain functions or variables from a file.
  - See string-function.js */


import { capitalizeString } from './string_function.js';
import { lowerCaseString } from './string_function.js';

const cap = capitalizeString("hello"); //Use the export method from string_functions.js
console.log("String in uppercase: " , cap);

const small = lowerCaseString("JELLO");
console.log("String in lowercase: " , small);


//---------------------Import ALL from a file and put file data into an object-------------------------------

import * as objMath from "./math_functions.js"; //We're importing all the data from the math_functions.js file and storing it in an object "objMath".

let firstNum = objMath.num1;
let secondNum = objMath.num2;

let total = objMath.sum(firstNum , secondNum);

console.log(firstNum + " + " + secondNum + " = " + total)


//------------------------------------Import a Default Export------------------------------------------------
//Notice no curly braces around default export function name. 
import writeLine from './random_strings.js'; 

console.log(writeLine());

