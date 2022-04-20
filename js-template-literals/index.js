//Create Strings Using TEMPLATE LITERALS
//Template literals allow us to create complex strings 

const person = {
    name: "Jiggly", 
    surname: "Bells",
    age: 56
};

//Template Literal assigned to greeting variable.
const greeting = `Hello, my name is ${person.name} ${person.surname}!
I am ${person.age} years old`

                
console.log(greeting);