//--------------------------WHILE LOOP---------------------------
const myArr = [];

let i = 0 ;  //instantiate i. 

while (i < 5){
    myArr.push(i);
    i++;
} 

console.log("While Loop:" , myArr);


//---------------------------FOR LOOPS----------------------------
const forLoopArr = [];

for (let i = 0; i < 5; i++) {
    forLoopArr.push(i);

}

console.log("For Loop:" , forLoopArr);


//Count Backwards
const backward = [];

for (let i = 10; i > 0; i--) { //Start Loop at 10 and decrement while i > 0.
    backward.push(i);
}

console.log("Count Backwards:" , backward);


//Count in 2s
const multiplesOfTwo = [];

for (let i = 2; i < 11 ; i+=2) { //Start Loop at 2 and increment in 2s while i < 11.

    multiplesOfTwo.push(i);
}

console.log("Multiples of Two:" , multiplesOfTwo);


//Iterate Through an Array using FOR LOOP.
let ourArray = [9 , 10 , 11 , 12];
let ourTotal = 0 ; 

for (let i = 0; i < ourArray.length; i++){ //NOTE While i < length of array.

    ourTotal += ourArray[i]; //finds sum of all elements in ourArray.
     
};

console.log("Sum Of Elements: " , ourTotal);


//Nesting FOR LOOPS
const newArray = [ [2,3] , [4,5] , [6,7] , [8,9,10] ];

function multiplyAll(arr) {
    let product = 1 ; 

    for (let i = 0; i < arr.length; i++) { //Loops through the outer array.
        for (let j = 0; j < arr[i].length; j++) { //Loops through inner arrays. 
        
            product *= arr[i][j]; //i references outer array and j references inner array
            
        }
        
    }

    return product; 
}

const product = multiplyAll(newArray);

console.log("Product of elements:" , product);


//------------------Iterate with DO-WHILE LOOPS-----------------------
//Difference between WHILE and DO WHILE : 
//WHILE: Checks the condition before the loop runs. 
//DO WHILE: Runs at least once before checking the condition. 

let myArray = [];
let myDoWhile = [];
let k = 10;

while (k < 5) {
    myArray.push(i);
    i++;
}

console.log("While Loop:" , i , myArray);

do{

    myDoWhile.push(i);
    i++;

} while (i < 5)

console.log("Do While Loop:" , i , myArray);


//---------------------------LOOK UPS APP--------------------------
/*Coding Challenge: Pass in the name of the person and the property 
   to look up. The app should return the value.*/

const contacts = [

    {
        "firstName": "Jeff", 
        "lastName": "Bezos", 
        "number": "unknown", 
        "likes": ["Amazon" , "Cheese" , "Gym"]
    }, 

    {
        "firstName": "Harry", 
        "lastName": "Potter", 
        "number": "01234", 
        "likes": ["Hogwarts" , "Magic" , "Hagrid"]
    }, 

    {
        "firstName": "Karim", 
        "lastName": "Benzema", 
        "number": "7", 
        "likes": ["Football" , "Video Games" , "Animals"]
    }, 

    {
        "firstName": "Sherlock", 
        "lastName": "Holmes", 
        "number": "223", 
        "likes": ["Cocaine" , "Puzzles" , "Violin"]
    }, 

    {
        "firstName": "Chris", 
        "lastName": "Bumstead", 
        "number": "10000", 
        "likes": ["Push Day" , "Pull Day" , "Leg Day"]
    }

]

function lookUpProfile (name , prop){

    for (let i = 0; i < contacts.length; i++) {
        
        if(contacts[i].firstName === name){ //check each item if equal to name that was passed in. 

            return contacts[i][prop] || "No Such Property"; //Bracket notation for prop. Also NOTE: if property does not exist then return No Such Property(JavaScript Fancy Way for if something doesn't exist). 
        } 
        
    }

    return "Contact Not Found";


}


let data = lookUpProfile("Harry" , "number");
console.log("Returned Coding Challenge Data:" , data);