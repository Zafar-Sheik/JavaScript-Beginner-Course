const ourDog = { 
    "name": "Camper", //everything before the colon is the property and after the colon is the value. Values can be of any datatype.  
    "legs": 4,
    "tails": 1,
    "friends": ["everyone!"]
};

const myDog = {
    "name": "Quincy", 
    "legs": 3, 
    "tails": 2, 
    "friends": []
};

//-------------------------Using Dot Notation to Access Properties-------------------------------

const testPerson = {
    "first name" : "Jeff",
    "last name" : "Bezos",
    "age" : 24, 
    "skills" : ["Python" , "Photoshop" , "SQL"]
     
};

let age = testPerson.age ;
console.log(age);  

//changing object property value using Dot Notation
testPerson.age = 25;
age = testPerson.age;
console.log("New Age after change: " + age);



//---------------------Using Bracket notation to access properties------------------------------

/* Use when:
   - Property name contains a space.
   - look up object properties using variables.
*/

let firstName = testPerson["first name"]; //notice the space in object property name.
console.log (firstName);


//Bracket notation used to access variable data. 
const testPeopleObject = {
    16: "Zafar",
    21: "Johnny",
    31: "Iqbal"
};

const personNum = 21;
const person = testPeopleObject[personNum]; //will return string value of property 16.

console.log(person);


//--------------------------------Add New Properties to an Object---------------------------------
const myTestItem = {
    "id": 01,
    "name": "Coke",
    "price": 10.00
};

myTestItem.Description = "330ml Buddy Coke"; //Add item with Dot notation
myTestItem["barcode"] = "010510"; //Add item with Bracket notation 

console.log(myTestItem.Description);
console.log(myTestItem.barcode);


//------------------------------Delete Properties to an Object------------------------------------

delete myTestItem.price; //deletes the property
console.log(myTestItem); //Look for difference. 


//--------------------------------Using Objects for lookups---------------------------------------

function phoneticLookup(val){ //This function returns a result based on the object property entered

    result = "";

    const lookUp = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    
    result = lookUp[val];

    return result; 

}

console.log(phoneticLookup("echo")); //will return "Easy". 


//----------------------------Checking Objects for Properties-------------------------------------

const myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObjProp (checkProp){ //object property received as a parameter. 


    if (myObj.hasOwnProperty(checkProp)){ //hasOwnProperty checks if the argument passed in, is equal to any of the object's properties.   
        return myObj[checkProp]; //Uses bracket notation to return the value of the object property. 
    } else {
        return "Not Found"
    }

}

console.log(checkObjProp("gift")); //will return "pony"
console.log(checkObjProp("hello")); //will return Not Found. 


//------------------------------Manipulating Complex Objects---------------------------------------

//Declaring an Array of Objects
const myMusic = [
    {
        "artist": "50 cent", 
        "title": "Best Friend", 
        "release year": 2005,
        "formats": ["CD" , "MP3" , "WAV" , "MP4"],
        "hasVideo": true,
        "gold": true
    },

    {
        "artist": "50 cent ft. Eminem", 
        "title": "Patiently Waiting", 
        "release year": 2003,
        "formats": ["CD" , "MP3" , "WAV"],
        "hasVideo": false,
        "gold": true

    },

    {
        "artist": "John Legend", 
        "title": "All of Me", 
        "release year": 2013,
        "formats": ["CD" , "MP3" , "WAV" , "MP4"],
        "hasVideo": true,
        "gold": true

    },
]

//----------------------Nested Objects: VERY IMPORTANT WHEN WORKING WITH DATA-----------------------

/* The object below represents storage accessible to a demo individual.

   The individual stores his/her items in either their house or car. 
   The house and car both contain storage areas which are either inside or outside the house.  

   Within the house there are 2 storage rooms. The kitchen and the bedroom.
   In this example, The kitchen has 2 main storage facilities, Cupboards and Scullery
   The bedroom also has 2 main storage facilities, Cupboards and Drawers
   Each of these storage facilities contain a List of items that are being stored.
   Some of these items can be broken down into other items, e.g. canned food is a broad term and can be broken down into specific items e.g. baked beans
   
   Outside the house, there are a 2 main storage rooms. The shed and the basement. 
   The shed contains tools and the basement contains house maintenance items. 
   These tools and items are stored in toolboxes, cupboards and drawers as seen below. 
   
   The car is broken down similarly. Read and understand the code. 


   */

const myStorage = {

    "house" : {

        "inside": {
            
            "kitchen": {

                "cupboards": ["plates", "cups" , "forks", "knives", "spoons"],
                "scullery": [cannedFood=["baked beans", "canned tomatos", "tuna"] , "cereal" , "pasta" , "teabags"]
            }, 

            "bedroom": {

                "cupboards": ["shirts", "pants", "shoes", accessories=["caps" ,"necklace", "ring", "bracelet"] ],
                "drawers": ["socks", "underwear" , "t-Shirts" , cosmetics=["lotion", "deoderant", "perfume", "vaseline"] ]
            }
        },
     
        "outside": {

            "shed": {

                "toolbox": [screwDrivers = ["flat screw driver" , "star screw driver"] , "hammer" , "pliers", "spanners", "saw"], 
                "drawers": ["sandpaper", "clipper" , "extension chord"]
            },

            "basement": {

                "cupboards": ["camping chairs", "tables", "lawn-mower", "pool cleaner"], 
                "drawers" : "old tools"
            }
        }

    },

    "car" : {
        "inside": {

            "glove box": ["service book" , "blank papers" , "sanitizer", "spoons"], 
            
            "center console": ["charger", "license" , "USB Drive"], 

            "cup holder": "cups"

        },

        "outside": {

            "trunk": {

                "upperTrunk": "extra-items", 

                "lowerTrunk": ["jack" , "wheelspanners" , "screwdriver" , "spare tyre"]
            }



        }
    }

};

console.log("This is a programmers view of your storage: " , myStorage); //view the entire object

console.log(myStorage.house.inside.bedroom.cupboards[0]); //Displays shirts.

console.log(myStorage.house.inside.bedroom.drawers[3][1]); //Display Deoderant.

console.log(myStorage.house.inside.kitchen.scullery[0][2]); //Display Tuna.

console.log(myStorage.car.outside.trunk.lowerTrunk[2]); //Display screwdriver.


const gloveboxContents = myStorage.car.inside["glove box"]; //Use bracket notation for properties with spaces. 
console.log(JSON.stringify(gloveboxContents)); //Display Contents of the car's glovebox. 

