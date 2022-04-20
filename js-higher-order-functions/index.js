//-------------------------Write Higher Order Arrow Functions--------------------------

/*- Arrow functions work really well with higher order functions like map(), filter() and reduce(). 
  - The main thing to know is map() filter() and reduce() takes in functions as arguments for
     processing collections of data.  
  - Whenever a function has another function as a parameter, arrow functions become very useful.
*/

//Compute Squares of Only Postive Integers in an array. 
const realNumbers = [4 , -9.8 , 11 , 7.5 , 2 , -2.4 , 3.6];

const squareList = arr => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x); //NOTE: num =>  when the arrow function only takes in a single argument, no parenthesis needed.
    //NOTE: Postive integers are extracted from realNumbers, and the squares of each of these numbers are calculated. All with 1 line of code. ARROW FUNCTIONS!
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumbers);
console.log("All Positive Integers Squared: " , squaredIntegers);


//---------------------Higher Order Functions with DEFAULT parameters--------------------
const increment = (function() {  //NOTE: Variables in js can be of type anonymous function. 

    return function increment (number, value = 1) { //NOTE: The value=1 sets the default argument to 1 if no value is passed in.
        return number + value;                      //ALSO NOTE: The anonymous function returns the function increment().
    };

}) ();

console.log("Number incremented by provided value: " , increment(5 , 2)); //Number 5 is incremented by 2 as provided. 
console.log("Number incremented by provided value:" , increment(5));      //Number 5 is incremented by 1. Default Value is set to 1 in method parameter.


//--------------------USE REST OPERATOR WITH FUNCTION PARAMETERS------------------------
//Rest operator allows you to create a function that takes a variable number of arguments. 

const sum = (function() { //NOTE AGAIN: Variable can be of type function. A variable can contain an entire function. 
    return function sum (x , y , z){ //NOTE AGAIN: A function can return another function. This function has 3 parameters.
        const args = [x , y , z]; //Array is declared and populated with functions arguments. 
        return args.reduce((a , b) => a + b , 0); 
     
    }
})();

   /* - The above method essentially takes args[x , y , z] and finds the sum.
      - The reduce() method returns a single value i.e the arrays accumulated result. 
      - The reduce method above returns a function which accepts a and b as arguments and computes the sum.  
      - This means that the args array is being processed 1 element at a time until the total of all the 
         elements (x , y , z) are found.
   */

console.log(sum(1 , 2 , 3));

//Same function with Rest (...) operator
const sumWithRest = (function() {
    return function sumWithRest (...args){  //NOTE: ... (The array is called args). The method can now take in any amount of arguments.
        return args.reduce((a , b) => a + b , 0);
    }

}) ();

console.log("Sum with Rest (4 Arguments): ",sumWithRest(1,2,3,4));
console.log("Sum with Rest (6 Arguments): ",sumWithRest(1,2,3,4,5,6));


//-----------------USE SPREAD OPERATOR TO EVALUATE ARRAYS IN-PLACE----------------------
/*Looks like the rest operator (...) but it expands an already existing array. 
  It takes an array and spreads it out into it's already existing parts.*/

const arr1 = ["JAN" , "FEB" , "MARCH" , "APRIL" , "MAY"];
console.log("Array 1 before change: " , arr1);

let arr2;

  (function(){
      arr2 = arr1; //arr2 is now equal to arr1. Any changes made to arr1 will reflect in arr2.
      arr1[0] = "potato" //First element of arr1 is set to potato.

  })();

console.log("Array 1 after change: " , arr1); 
console.log("Array 2 Equal to Array 1: " , arr2); 



//Use Spread Operator:
const arr3 = ["JAN" , "FEB" , "MARCH" , "APRIL" , "MAY"];
console.log("Array 3 before change: " , arr3);
let arr4;

  (function(){
    arr4 = [...arr3]; //SPREADS out contents of array 3 into array 4. They aren't equal but the contents in arr4 are the same. Changes made in arr3 will not reflect in arr4.
    arr3[0] = "potato"; //First element of arr3 is set to potato.

})();

console.log("Array 3 after change: " , arr3); 
console.log("Array 4 with spread operator:" , arr4); //arr2 is now a copy of arr3 and the elements remain unchanged.
