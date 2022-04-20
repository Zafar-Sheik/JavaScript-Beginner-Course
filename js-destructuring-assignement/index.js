//----------------------------DESTRUCTURING ASSIGNMENT WITH OBJECTS---------------------------------
//Special Syntax for neatly assigning values taken from an object to a variable.

const voxel = {
    x: 3.6,
    y: 7.4,
    z: 5.64
};


//Destructuring Syntax. Assign Values from Voxel Object to constants a , b , c. 
const {x : a , y : b , z : c} = voxel; //a = 3.6 , b = 7.4 , c = 5.64

/*It's the same as doing: (This is the older way of assigning object variables.)

  const a = voxel.x;
  const b = voxel.y;
  const c = voxel.z;
*/

const AVG_TEMPS = {
    today: 25,
    tomorrow: 28
};

function getTempOfTmrw(avgTemperatures){
    "use strict"; //Use strict. It helps you to write cleaner code, like preventing you from using undeclared variables.

    const {tomorrow : tempOfTmrw} = AVG_TEMPS; //essentially: get temp of tomorrow from object AVG_TEMPS and assign it to tempOfTmrw

    return tempOfTmrw;
}

console.log(getTempOfTmrw(AVG_TEMPS));


//--------------------------DESTRUCTURING ASSIGNMENT WITH NESTED OBJECTS-------------------------------

const LOCAL_FORECAST = { //NOTE Nested Object
    today : {min:19 , max:24 , rainfall:40},
    tomorrow : {min:22 , max:27 , rainfall:25} 
};

function getMaxOfTmrw(forecast) { 
    "use strict";
    const {tomorrow : {max : maxOfTomorrow}} = forecast; //Note the nested curly braces for nested object.

    return maxOfTomorrow;

}

function getRainfallOfToday(forecast){
    "use strict";

    const {today : {rainfall : rainfallOfToday}} = forecast; //Note the nested curly braces for nested object.

    return rainfallOfToday;
}

console.log("Rainfall Of Today (%): " + getRainfallOfToday(LOCAL_FORECAST));
console.log("Max Temp Of Tomorrow (celcius): " + getMaxOfTmrw(LOCAL_FORECAST));


//---------------------DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS------------------------
const [z , x , , y ] = [1,2,3,4,5,6]; //Assign z and x to first 2 elements in array. Y is assigned to element 4. 3 is skipped.

//Use destructuring to switch places of variables 
let k = 8 , j = 6;

(() => { 
    "use strict";
    [k , j] = [j , k] //Switch elements with destructuring here. 
}) ();

console.log("k: ", k );
console.log("j: " , j );


//---------------------------DESTRUCTURING ASSIGNMENT WITH REST OPERATOR-------------------------------
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo (list) {

    const [ , ,...arr] = list; //Do nothing for first and second element and put the remainder of the arr into list.
    return arr;
}

const arr = removeFirstTwo(source);

console.log("First Two Removed:" , arr);
console.log("Source Array: " , source);


//---------------DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETER------------------
/*Useful when using API's and there are often a lot more information than we need.
  Destructuring use of only what's necessary*/ 

const stats = {
    max: 56.6, 
    standard_deviation: 4.32,
    median: 34.54,
    mode: 23.87, 
    min: -0.75,
    average: 35.85 
};

const half = (function(){ 
    return function half({ max , min }){ //When stats obj gets passed in, it's destructured into it's max and min props.
        return (max + min)/2.0;
    };

})();

console.log("Source: " , stats); 
console.log("Half: " , half(stats)); //pass stats in as argument and it will be destructured in the function. 


