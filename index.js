// Calculator Program
const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}
// Calculator Program


// Learnig JavaScript
console.log('Hello World');
let name = 'Chuks'; //Strings
console.log(name);  
let age = 20; //Numbers
let isApproved = false; //Boolean
let firstName = undefined;
let selectedColor = null;

// Objects
let person = {
    name: 'Mosh',
    age: 21
}
console.log(person);

person.name = 'chuks';
console.log(person.name);

person['age'] = 23;
console.log(person['age']);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);

// Performing a task
function greet(name, lastName) {
    console.log('Hello, ' + name);
}
greet('Chuks', 'Onyekams');
greet('Vin');
greet('Paul');

// Calculate a value
function square(number){
    return number * number;
}
console.log(square(2));