// function functionname(){
//     code to be exicutee
// }
console.log("-".repeat(70))
function name(me){
    console.log(`My name is :${me}`)
}
name("shubham");

console.log("-".repeat(70))

function clas(me){
    console.log(`i am ${me} class`)
}

clas("12th");
name("mahendra")

console.log("-".repeat(70))

// 🔹 Types of Functions in JavaScript

// 1. Function Declaration (Normal Way)

function sum(a,b){
    console.log(a+b);
}
sum(10,20);

console.log("-".repeat(70))

let x = 20;
let y = 30;
let z = 40;

function multiply(a , b , c){
    let d = a*b*c;
    console.log(d);

}
multiply(x,y,z);

function sub(a , b , c){
    let e= a-b-c;
    console.log(e);
    let f= (a/b)*c;
    console.log(f);

}
sub(x,y,z);

console.log("-".repeat(70))

function college(name){
console.log(`college:${name}`)
}                                                                                                                

college("SGSITS UJJAIN ");

console.log("-".repeat(70))

function village(name){
    console.log(`My village name is:${name}`);
}
village('Lasudiya surajmal');

console.log("-".repeat(70));

// 2. Function Expression

let student = function(id){
    console.log(`student id :${id}`);
}
student(123);
student(345);
student(6758);

console.log("-".repeat(70))

let square = function(a,b){
    let c = a*b;
    console.log(c);
   let  d = c*b*a;
   console.log(d)

}
square(12,12);
square(12,32);
square(12,92);
square(92,19);

console.log("-".repeat(70));

let evenodd = function(num){
    if(num%2==0){
        console.log("even number")
    }
    else{
        console.log("odd number")
    }
}
evenodd(19);
evenodd(20);
evenodd(11);

console.log("-".repeat(70));

let check = function(num){
    if(num>0)
    {
        console.log("positive")
    }else{
        console.log("negative")
    }
}

check(34);
check(-5);
check(-9);
check(9);
check(90);

console.log("-".repeat(70))

function table(num) {

    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }

}

table(5);

console.log("-".repeat(70));

// 3. Arrow Function (ES6 Feature)

let cube = num=>num*num*num;
console.log(cube(8));

let name1 = name=>"shubham";
console.log(name1(name));

let father = name=>"shyam lal ji";
console.log(father(name))

console.log("-".repeat(70));

// project

// const products = [
//   { id: 1, name: "Rice", price: 60 },
//   { id: 2, name: "Sugar", price: 40 },
//   { id: 3, name: "Wheat", price: 50 },
// ];

// function showproduct(){
//         products.forEach((product)=>{
//             console.log(`${product.name}- ₹${product.price}`)

//         })
// }
// showproduct();

// let cart =[] ;

// const addtoCart = function (productId, quantity) {
//   const product = products.find((item) => item.id === productId);
//   if (product) {
//     cart.push({
//       name: product.name,
//       price: product.price,
//       quantity: quantity,
//     });
//     console.log(`${product.name} added to cart (${quantity}kg)`);
//   } else {
//     console.log("Product not found");
//   }
// };

// addtoCart(1,2);
// addtoCart(2,1);
// addtoCart(3,2);

// let total = ()=>{
//     let total = 0;
// cart.forEach((item) =>{
//     total+=item.price*item.quantity;

// });
// return total ; 
// };
// function applyDiscount(totalAmount) {
//   if (totalAmount >= 150) {
//     return 20; // flat ₹20 discount
//   }
//   return 0;
// }

// function showFinalMessage(total, discount, callback) {
//   console.log(`Cart Total: ₹${total}`);

//   console.log(`Discount Applied: ₹${discount}`);
  
//   let finalAmount = total - discount;
//   callback(finalAmount);
// }

// let total = calculateTotal(); // ₹170
// let discount = applyDiscount(total); // ₹20
// showFinalMessage(total, discount, function (finalAmount) {
//   console.log(`You need to pay ₹${finalAmount}`);
// });


// 🔹 Parameters vs Arguments

function welcome(user) {  // user is a parameter
  console.log("Welcome " + user);
}

welcome("Priya");  // "Priya" is an argument

function getfullname(firstName, lastName) {  // firstName and lastName are parameters
  return firstName + " " + lastName;
}       

let fullName = getfullname("shubham", "krish");  // "John" and "Doe" are arguments
console.log(fullName);  // Output: "John Doe"
    

function calculatesarea(length, width) {  // length and width are parameters
  return length * width;
}
let area = calculatesarea(5 , 10);  // 5 and 10 are arguments
console.log(area);  // Output: 50

function greet(name , age){
  return `Hello ${name}, you are ${age} years old.`;
}
console.log(greet("shubham", 20));  // Output: "Hello shubham, you are 20 years old."

function showage(age){
console.log(`Your age is ${age}`);
}

showage(20);  // Output: "Your age is 20"


function calculatetotal(price , quantity){
    let total= price*quantity;
    return total;
}

 let carttotal = calculatetotal(50,3);
 console.log(`total cart value is :${carttotal}`);  // Output: "Total cart value is: 150"

//  callback

function showmasge(name , callback){
    console.log("Hello"+name);
    callback();
}
function saybye(){
 console.log("Goodbye!");
}
showmasge("shubham",saybye);  // Output: "Hello shubham" followed by "Goodbye!"

function msg(name , college) {
    console.log("Hello" + name);
college();
}   
function stn(){
    console.log("SGSITS UJJAIN");
}

msg("shubham",stn);  // Output: "Hello shubham, welcome to SGSITS UJJAIN"

function calculate(num1 , num2 , callback){
    let sum = num1+num2;
console.log(`sum is :${sum} num2 is :${num2}`);
callback();
}
function sub(){
    console.log("calcultion  completed ");
}
calculate(10,20,sub);  // Output: "30" followed by "Calculation completed "


