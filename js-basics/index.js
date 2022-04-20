//----------------------VARIABLES: CAMMEL CASING NOTATION-----------------------

let firstName = 'Zaf';
let age = 21;              //All numbers are of type number. No need for Int or Double in js. 
let isApproved = true; 
let lastName;             //This is undefined. 
let selectedColor = null; //Use null explicitly when user needs to select something in the future (clear the value of variable).

//Cannot reassign a constant. It is a Static Variable. Use 'let' if you need to redefine a variable.
const interestRate = 0.3; 

console.log ('Hello World' , firstName, age, isApproved, lastName, selectedColor, interestRate);

//---------------------------------OBJECTS-------------------------------------

//Declare an object


const person = {
    personName : 'Max',
    age : 23
};

console.log(person);

//Dot Notation to change/see object properties. 
person.personName = 'John';
console.log(person.personName);

//Bracket Notation to change/see object properties. 
let selection = 'personName';
person[selection] = 'Dylan';
console.log(person.personName);

//----------------------------------ARRAYS-------------------------------------

let selectedCars = ['A250' , 'GTR'];

selectedCars[2] = "M3";
selectedCars[3] = 20;         //Arrays in JS are dynamic. Contents can be of different data types.  

console.log(selectedCars);
console.log(selectedCars[0]); //Index starting at 0;

console.log(selectedCars.length);

//--------------------------------FUNCTIONS------------------------------------

//Declare a function that performs a Task.
function greet() {
    console.log('This is a function: ' , 'Hello World');
}
//Call the function
greet();


//Declare with Parameter and perform a Task.
function greetName(name) {
    console.log('This is a function receives an argument as a parameter: ' , 'Hello ' + name);
}
//Call With Argument.
greetName('Zaf');


//Declare a function that Calculates a Value
function calcSquare(number) {
    return ('The square of ' + number + ' was calculated by a function: ' + number*number);    
}
//Call the function.
console.log(calcSquare(2));