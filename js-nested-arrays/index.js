//Access multi-dimentional array with indexes
const numbersArray = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9], [[10, 11, 12] , 13 , 14] ]; //last element of array contains an array. 3 layer array.
console.log("Source: " , numbersArray );

//select nested array '[1,2,3]'. 
let myData = numbersArray[0]; 
console.log("Select Nested Array [1 , 2 , 3]: " , myData);

//select '8' from array.
myData = numbersArray[2][1] 
console.log("Select 8 from Array: " , myData);

//select '11' from array.
myData = numbersArray[3][0][1]; 
console.log("Select 11 from Array: " , myData);

//---------------------Add element to end of array with push (Append to array).--------------------

//Declare Nested Array. Can be of different data types. 
const ourArray = [["Zaf" , 21] , ["Mike" , 23] , ["James", 30]]; 

ourArray.push(["Moe" , 25]);
console.log("Added Moe to Array:" , ourArray);

//--------------------------Remove final element from array with pop.-------------------------------

let removedFromOurArray = ourArray.pop();
console.log(ourArray , " removed last (pop) item: " , removedFromOurArray);

//-------------------------Remove first element from array with shift.------------------------------

removedFromOurArray = ourArray.shift();
console.log(ourArray , " removed first (shift) item: " , removedFromOurArray)

//-------------------------Add element to beginning of array with unshift.--------------------------
ourArray.unshift(["Iqbal", 26]);
console.log(ourArray);
