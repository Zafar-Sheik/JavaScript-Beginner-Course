//Arrow function to make every string uppercase. We can import this in our index.js file 
//because "export" makes this an export function.

export const capitalizeString = str => str.toUpperCase();

//Can Also Export Like This:

const lowerCaseString = str => {
    return str.toLowerCase();
}

export{lowerCaseString};
