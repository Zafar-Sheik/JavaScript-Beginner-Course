//Function Create 
function ourReusableFunction() {
    console.log("Hello World");
}

//Function Call 
ourReusableFunction();

//Using Parameters and passing in arguments. 
function ourFunctionWithArgs (a , b){
    console.log (a - b);
}

ourFunctionWithArgs(10 , 5); //10 - 5 = 5;


function ourAddFunctionWithArgs (a , b , c){
    console.log(a + b + c);
}

ourAddFunctionWithArgs (5 , 5 , 5); //5+5+5=15

//-------------------Global Scope & Functions-----------------------
/*Scope refers to visibility of variables. Variables which are defined outside of 
a function block have global scope. Global scope means they can be seen 
everywhere in js code. */

//Declare Global variable 
let myGlobal = 10; //Can see it in every function 

function fun1(){

    const _oopsGlobal = 5; //private variable. Only accessible to this method because "const" used. 

    oopsGlobal = 5; //Wihtout var, let or const keyword, it becomes a private. Only accessible to this method.

}

function fun2 () {
    let output = "";

    if (typeof myGlobal != "undefined") {    //Check if myGlobal is undefined. In the case of global variable, it will not be undefined because all functions can see it. 
        output += "myGlobal: " + myGlobal;

    }
    console.log(output);

    if (typeof oopsGlobal != "undefined") {  //Check if oopsGlobal is undefined. Will not be undefined because declaration in "fun1()" didnt take a "const", "let" or "var". 
        output += " | oopsGlobal: " + oopsGlobal;
    }
    console.log(output);

    if (typeof _oopsGlobal != "undefined") { //Check if _oopsGlobal is undefined. In this case, it is undefined, because declaration in "fun1()" uses "const".
        output += " | _oopsGlobal: " + _oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();


//-------------------------Local Scope Variables-------------------------------
function myLocalScope() {

    let myVar = 5; //only visible inside the function. 
    console.log(myVar);
}

myLocalScope();

//console.log(myVar); //Uncomment to see how it throws an error. Attempt to access myVar outside function. 


//------------------Global vs Local Scope in Functions-------------------------
let outerWear = "T-Shirt";

function myOutfit () {
    
    let outerWear = "sweater";
    return outerWear;        //Will return the local variable outerwear. Local Variable take precedence over global variable. 


}

console.log(myOutfit());
console.log(outerWear); //Will return "T-Shirt". See global declaration.


//-------------Return a Value from Function with "Return"-----------------------
function minusSeven (num){
    return num-7;
}

console.log(minusSeven(10)); //Will return 3 

function timesFive (num){
    return num * 5;
}

console.log(timesFive(5)); //Will return 25


//------------Understanding Undefined Value returned from function--------------
let sum = 0 ; 

function addThree () { //Function has no return value. Return value is considered undefined. 

    sum += 3; 
}

function addFive () { //Again, no return value. If this method is logged directly, it will return undefined. 
    sum += 5; 
}


//---------------------Assignment with a Return Value---------------------------
let changed = 0 ; 

function change (num) {
    return (num + 5) / 3 ;
}

changed = change(10);
console.log(changed);

let processed = 0 ; 

function processArg (num) {
    return (num + 3) / 5 ; 
}

processed = processArg(7); //processed = 2. 
console.log(processed);

//-----------------------------NEXT IN LINE--------------------------------------
//This example simulates the workings of a person being next in line. It is not automated.

function nextInLine (arr, item) { // Add an item to the array that's passed in. 

    arr.push(item); //Push/Append/Add item to end of the array.
    return arr.shift(); //Shift/Remove the first item from the array.
}

const testArr = [1 , 2 , 3 , 4 , 5];

console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify is a way of displaying the contents of the array as a string.

console.log(nextInLine(testArr , 6)); 
console.log("After: " + JSON.stringify(testArr));


//NOTE: Only read after this point once done with if statements. 
//---------------------------BOOLEAN FUNCTIONS----------------------------------
function welcomeToBooleans(){
    return true; 
}
console.log(welcomeToBooleans());

function isLess(a , b){

    return a < b; //Instead of typing out an if statement, this returns true or false based on the comparison operator.

}

console.log(isLess(5 , 10)); //will return true


//--------------------RETURNING EARLY PATTERN FROM FUNCTIONS--------------------
 function abTest(a , b) {

    if (a < 0 || b < 0){
        return undefined; //return undefined. 
    }

    return Math.round(Math.pow (Math.sqrt(a) + Math.sqrt(b), 2) );
 }

 console.log(abTest(2 , 2)); //returns 8.
 console.log(abTest(-2 , 2)) //returns undefined.