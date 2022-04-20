//keyword "if" tells javascript to execute the code in brackets under certain conditions

function ourTrueOrFalse (isItTrue){
    if (isItTrue){
        return "It is true";
    }

    return "No. It is False."
}
console.log(ourTrueOrFalse(false));

function trueOrFalse (wasThatTrue) {

    if (wasThatTrue){
        return true;
    }

    return false;

}
console.log(trueOrFalse(true));

//---------------------Comparison with Equality Operator-----------------------
function testEqual (val) {
    if (val == 12){       //Double equal for comparison. Single equal for comparison. 
     
        return "Equal";
    }
    return "Not Equal";
}

console.log("Test Equality Operator: " , testEqual(10));

//-------------------------Strict Equality Operator---------------------------

/* Represented by Triple equal sign. x === x ; 

The Difference:

- Double equality operator attempts to convert both values being compared to a common type. 
- Double equality example: 3==3 will return true. 3=='3' will return true (the string is converted to a number).

- Triple/Strict equality operator does not attempt the conversion. 
- Strict equality example: 3===3 will return true. 3==='3' will return false (notice how string is not converted to a number).

*/

function compareWithDoubleEquality(a , b) {
    if (a == b) {
        return "They are equal";
    }

    return "They are not equal";
}

function compareWithStrictEquality(a , b) {
    if (a === b) {
        return "They are equal";
    }

    return "They are NOT equal";
}

console.log("Comparison:" + compareWithDoubleEquality(10 , "10")); //will return equal.
console.log("Strict Comparison:" + compareWithStrictEquality(10 , "10")); //will return not equal.


//---------------------------Inequality Operator------------------------------
//Note: Does type conversion.

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }

    return "Equal";
}

console.log("Inequality Operator: " + testNotEqual(10)); //Will return equal because 10!=99 is true.


//-------------------------Strict Inequality Operator--------------------------
//Note: Does not do type conversion. 

function testStrictNotEqual(val){

    if(val!==17){
        return "Not Equal";
    }
    return "Equal";
}

console.log("Strict Inequality Operator: " + testStrictNotEqual("17")); //will still return not equal. Type conversion inactive. '17' !== 17 is true.


//----------------------------Greater Than OR Less Than------------------------
function testGreaterThan(val){
    if(val > 10){
        return "Test Greater than: Value is Greater than 10";
    }
    return "Test Greater than: Value is either 10 OR Less than 10";

}

console.log(testGreaterThan(14)); 
console.log(testGreaterThan(10));
console.log(testGreaterThan(8));


//-------------------------Greater Than or Equal Operator----------------------
function testGreaterOrEqual(val){
    if(val >= 20) {
        return "20 or Over";
    }

    if(val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

console.log("Test Greater Than or Equal: " , testGreaterOrEqual(10));

 
//Less than operators work the same with symbol < . 
//Less than or equal operator works with same with symbol <= .


//---------------------------Test Logical AND-----------------------------------
function testLogicalAnd (val) {
    if (val >= 10 && val <= 20){
        return "yes";
    }
    return "no";
}

console.log("AND Operator: " , testLogicalAnd(10));


//--------------------------------Test Logical OR------------------------------------
function testLogicalOr (val) {
    if (val < 10 || val > 20){
        return "Inside";
    }
    return "Outside";
}

console.log("OR Operator Condition 2: " , testLogicalOr(22)); //Returns Inside because value is within the OR range. 
console.log("OR Operator Condition 1: " , testLogicalOr(16)); //Returns Outside because value is not within the range.


//--------------------------------ELSE STATEMENT-------------------------------------
function testElse (val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";

    } else {

        result = "Smaller than 5";

    }

    return result;
}

console.log("Test If Condition: " , testElse(8) );
console.log("Test Else Condition: " , testElse(3) );

//----------------------------------ELSE-IF STATEMENT-------------------------------
/* if you have multiple conditions that need to be met use Else If statements. It's a way of 
chaining if statements together. */

function testElseIf(val) {
    if (val > 10){
        return "Greater than 10";

    } else if (val < 5) {
        return "Less than 5";

    } else {
        return "Between 5 and 10";
    }
}

console.log("Test Else If: " , testElseIf(7));


//-----------------------Logical Order in If Else Statements-----------------------
function testElseIfLogical(val) {
    if (val < 5){
        return "Less than 5";

    } else if (val > 10) {
        return "Greater than 10";

    } else {
        return "Greater than or Equal to 10";
    }
}

console.log("Test Logically Structured  If Else: " , testElseIfLogical(3)); //If condition is met, and if else statements are in logical order, the code will not check all conditions. Saves memory. Returns more accurate result.


//---------------------------USE THE TERNARY OPERATORS------------------------------
/* Ternary Operator is an if statement shortcut
  condition ? statement if-true : statement-if-false */ 

function checkEqual (a , b) {
    if (a===b) {
        return true;
    }
    else {
        return false; 
    }
}

function checkEqualWithTernary (a , b){

    return a===b ? true : false ;      
}

//Change these values to Test.
console.log("Check Equal Using IF-ELSE: " , checkEqual(1 , 2));
console.log("Check Equal Using Terary Operator (?): " ,  checkEqualWithTernary(7 , 8) );


//-------------------USE MULTIPLE CONDITIONAL TERNARY OPERATORS----------------------
//Nesting Ternary Operators

function checkSign(num){

    return num > 0 ? "positive" : (num < 0 ? "negative" : 0);  //Returns positive or negative based on the type of integer entered. Will return 0 if 0 entered. 
}

console.log(checkSign(10)); //Will Return Positive.
console.log(checkSign(-9)); //Will Return Negative.
console.log(checkSign(0)) // Will Return 0.
