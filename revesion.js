// <!-- datatype,,,, -->

// <!-- 1.primitive data types -->

// <!-- 1.string: A string is a sequence of characters used to represent text. In programming, strings are often enclosed in quotes. For example, "Hello, World!" is a string. -->

var greeting = "Hello, World!";
var name = 'Alice';

// 
// 1.2 Number
// The number type in JavaScript includes both integers and floating-point (decimal) numbers.

let age = 25; 
let price = 99.99;  

// 1.3 BigInt
// BigInt is used for very large numbers that cannot be represented by the regular Number type. It is created by adding n at the end of a number.

let bigNumber = 1234567890123456789012345678901234567890n;

// 1.4 Boolean
// A boolean represents true or false. It is often used in conditions and comparisons.

let isRaining = true;  
let isSunny = false;  

// 1.5 Undefined
// A variable is undefined when it has been declared but not assigned a value.

let myVariable;

// 1.6 Null
// Null is 
// an intentional absence of a value. It is an object in JavaScript.

let emptyValue = null;  


function getData() {  
  return null;  
} console.log(getData());  // Output: null
// 1.7 Symbol
// A Symbol is a unique and immutable identifier.
// let mySymbol = Symbol('description');

// 2. Non-Primitive (Reference) Data Types
// Reference types store memory addresses instead of actual values. The main types are:

// Objects
let person = {
  name: "Alice",
  age: 30
};

let student ={
    id: 1,
    name: "shubham",
    age: 20,
    course: "B.tech"
}

// Arrays

let numbers = [1, 2, 3, 4, 5];
let  numbers2 = [10, 20, 30, 40, 50];

// Functions
let myFunction = function(greeting) {   
    console.log(greeting);
}
myFunction("Hello, World!");  // Output: Hello, World!

function showage(age){
    console.log(age);
}
showage(20);  // Output: 20

let add =function(num1 , num2){
    let sum = num1+num2;
    console.log(`sum is :${sum} num2 is :${num2}`);
}
add(5, 10);  // Output: sum is :15 num2 is :10



let cube =num=>num*num*num;
console.log(cube(3));  // Output: 27

let square = num=>num*num;
console.log(square(4));  // Output: 16

// methods in array/

// push() - Adds elements to the end of an array

let fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits);  // Output: ["apple", "banana", "orange", "grape"]

// pop() - Removes the last element

let lastFruit = fruits.pop();
console.log(lastFruit);  // Output: "grape"
console.log(fruits);  // Output: ["apple", "banana", "orange"]

// unshift() - Adds elements to the beginning

let numbers1=[2,3,4,5,6]
numbers1.unshift(1);
console.log(numbers1);  // Output: [1, 2, 3, 4, 5, 6]

// shift() - Removes the first element\\

 arr1 = [1, 2, 3, 4, 5];
arr1.shift();
console.log(arr1); // Output: [1, 2, 3, 4]

// splice() - Removes/replaces elements at any position

let colors = ["Red", "Green", "Blue"];
colors.splice(1, 1, "Yellow");  // Remove 1 element at index 1 and insert "Yellow"
console.log(colors);  // Output: ["Red", "Yellow", "Blue"]

// slice() - Returns a portion of an array (without modifying it)

let number3 =[10, 20, 30, 40, 50];
let slicedNumbers = number3.slice(1, 3);
console.log(slicedNumbers);  // Output: [20, 30]

// concat() - Merges two or more arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray);  // Output: [1, 2, 3, 4, 5,;


console.log("-".repeat(70));


let arr10 = 
[
    12,23,45,6,7,9,45,67,
]

for(let num of arr10){

    console.log(num);

}

console.log("-".repeat(70));

 let obj ={
    name:"shubham",
    age :"19 year" ,
    class:"12th"

}
for(let keys in obj){
    console.log(`your${keys}: ${obj[keys]}`)
}

for(let i =1 ; i<=10;i++){
    let c = 5;
    console.log(`${i}*${c}:${i*c}`);
}

console.log("-".repeat(70));

for(let i =1 ; i<=10;i++){
    let b = 7;
    console.log(`${i}*${b}:${i*b}`);
}
let dayss =  3;

switch(dayss){
     case 1:
     console.log("sunday");
     break;
     case 2:
     console.log("monday");
     break;
     case 3:
     console.log("tuesday");
     break;
      case 4:
     console.log("wednesday");
     break; 
     case 5:
     console.log("thursday");
     break; 
     case 6:
     console.log("friday");
     break;
}

console.log("-".repeat(70));

let choice = 2;

switch(choice){
    case 1:
        console.log("One ki table");
        for(let i = 1;i<=10;i++){
            console.log(`${i}*1:${i*1}`);
        }
        break;
        case 2:
        console.log("Two ki table");
        for(let i = 1;i<=10;i++){
            console.log(`${i}*2:${i*2}`);
        }
        break;

        default:
            console.log("invailide choice")
}
console.log("-".repeat(70));

let agee = 17;
if (agee >= 18) {
    console.log("You are eligible to vote.");

}else{
    console.log("you are not eligible to vote");
}


console.log("-".repeat(70));

let light = "red";
if (light === "green") {
    console.log("Go");
} else {
    console.log("Stop");
}
console.log("-".repeat(70));

let score = 75;
if (score >= 90) {
    console.log("Grade:A");
} else if (score >=75) {
    console.log("Grade:B");
} else {
    console.log("Grade:C");
}








