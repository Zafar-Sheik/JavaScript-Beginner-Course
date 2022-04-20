//----------------------------------CONVERSIONS--------------------------------------
//Convert String to an Integer.
function convertToInteger(str){

    return parseInt(str); //returns the string as an integer
}

console.log(convertToInteger("88"));


//Use parseInt function with Radix
/*Radix specifies base of the number in the string. Such as base2 (binary) */

function convertBinaryToInteger (str){
    return parseInt(str , 2); //NOTE the 2 for base2 (binary)
}

console.log(convertBinaryToInteger("1001111")); //returns 79.



