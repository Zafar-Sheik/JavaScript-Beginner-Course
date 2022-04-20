/* Instead of using chained if else statements, use a switch statement. 
A switch statement tests a value and can have many case statements which define various possible values. */

function caseInSwitch (val){
    let answer = "";

    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
            
            
    }

    return answer;
}

//change this value to test.
console.log(caseInSwitch(1));


//-------------------------Default Function------------------------------

/*Default function is kind of like else. It's a default value if 
  none of the conditions are met. */ 

function switchOfStuff (val){
    let answer = "";

    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;

        default:
            answer = "something else";
            break;   
    }

    return answer;
}

//change this value to test.
console.log(switchOfStuff("a"));
console.log(switchOfStuff(5));


//-------------------Sequential Sizes with Switch------------------------
function sequentialSizes(val){
    let answer = "";
    
    switch (val){
        case 1: 
        case 2: 
        case 3:
            answer = "low";
            break;

        case 4: 
        case 5: 
        case 6:
            answer = "mid";
            break;
        
        
        case 7: 
        case 8: 
        case 9:
            answer = "high"; 
            break;

        default:
            answer = "undefined";
            break;    
    }

    return answer;
}

//Change this value to test.
console.log(sequentialSizes(8));