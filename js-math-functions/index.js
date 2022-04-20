//Generate Random Fractions 
function randomFraction () {
    return Math.random();
}

console.log("Random Fraction:" , randomFraction());


//Generate Random Whole Number
let randomNumberBetween0and19 = Math.floor(Math.random() * 20); //Math.Floor() Rounds Down to the nearest Whole Number. 
console.log("Random Number Between 0 and 19:" , randomNumberBetween0and19);


//Another way
function randomWholeNum (){

    return Math.floor(Math.random() * 10);
}

console.log("Random Number Between 0 and 9:" , randomWholeNum());



