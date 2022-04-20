//The following function is an anonymous (it doesn't have a name, rather it is assigned to a variable):

//This is the old way of writing functions.
var magic = function () {
    return new Date();
}

//Arrow function of the above function. 
const magicArrowFunction = () => new Date();


//-------------------------Write Arrow Functions with Parameters-----------------------

//Passing arguments as parameters to Arrow Functions. 
//The following function merges 2 arrays using .concat()
var merge = function (arr1 , arr2) {
    return arr1.concat(arr2);
}

//Using Arrow Function 
const mergeWithArrowFunction = (arr1 , arr2) => arr1.concat(arr2);

const arr1 = [1,2,3,4,[5,6,7]];
const arr2 = [8,9,[10,11,12]];

console.log("Merged With Regular Function: " , merge(arr1 , arr2));
console.log("Merged With Arrow Function: " , mergeWithArrowFunction(arr1 , arr2));


