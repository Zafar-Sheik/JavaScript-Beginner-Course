//--------------------Write Concise Object Literal Declarations Using Simple Fields-------------------

//Define an Object Using Arrow Function.  
//This function takes in 3 variables and is going to RETURN an object. 
//Note the properties do not contain an underscore and the key value pair does contain an underscore.
const createPerson = (_name , _age , _gender) => {
    return {
        name: _name, 
        age: _age, 
        gender: _gender
    };
};

console.log(createPerson("Jiggly Bells", 56 ,"other"));

//Easier way to do the above function. 
//If your object property and key value pairs have the same name, your constructor should look like this:
const createCar = (name , model , year , color) => ({name, model, year, color});

console.log(createCar("Toyota", "Etios", 2013 , "white"));


//--------------------------------Write Concise Declarative Functions--------------------------------
//An Object can contain a function. 
//Simple Way To Do It:

const bicycle = {
    gear: 2, 
    
    setGear(newGear) {
        "use strict"; 
        this.gear = newGear;
    }


};

bicycle.setGear(3);
console.log(bicycle.gear);


//-------------------------------USE A CLASS SYNTAX TO DEFINE A CONSTRUCTOR---------------------------
//Create the constructor
function makeClass(){
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }

    return Vegetable;
}

//Call the constructor
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);


//----------------------------GETTERS AND SETTERS TO CONTROL ACCESS TO OBJECT--------------------------
class book {
    constructor (author) {
        this._author = author; //Constructor receives an author as a parameter and sets the object property.
    }

    //getter
    get writer () {
        return this._author; //Returns the object property to the main class.

    }

    //setter
    set writer (updateAuthor){
        this._author = updateAuthor; //The main class will send an argument to this method to update the 
                                     // author of the book. The object property this._author is now set. 
    }
}

const objBook = new book("Robert Kiyosaki");

let writer = objBook.writer; //Accesses GET Method.

console.log("Author before Update: " , writer);


objBook.writer = "JK Rowling"; //Updates using SET Method. No Parenthesis

writer = objBook.writer;

console.log("Author After Update: " , writer);


//------CREATE A THERMOSTAT CLASS AND CREATE GETTER AND SETTER TO CONVERT FROM FARENHEIT TO CELCIUS------
function makeClass() {
    class Thermostat {

        constructor(tempInF) {
            this._temp = 5/9*(tempInF-32); //Conversion done in constructor as soon as it is called. 
        }

        get temperature(){
            return this._temp;
        }

        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}


const Thermostat = makeClass(); //makeClass function is going to return the Thermostat Object.

const thermos = new Thermostat(76); //Call the constructor. Instantiate the object.

let temp = thermos.temperature; //Calls the GETTER. No parenthesis for getters and setters.

thermos.temperature = 26; //This calls the SETTER. NOTE: No parenthesis for setters.

temp = thermos.temperature; //GETS New Temperature After Update. 

console.log("Converted to Celcius:" , temp);




