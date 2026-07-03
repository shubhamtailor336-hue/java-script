// // --- Section A: Conditionals & Basic Logic ---

// // Q1. Find the largest number\

// let arr1 = [45, 12, 89, 34, 67, 23];
// let largest = Math.max(...arr1);
// console.log("Largest number:", largest);
// console.log("-".repeat(60));

// // Q2. Count total even and odd numbers

// let arr = [12, 7, 9, 20, 15, 18, 3, 6];
// let evenCount = 0, oddCount = 0;
// arr.forEach(num => (num % 2 === 0 ? evenCount++ : oddCount++));
// console.log(`Even: ${evenCount}, Odd: ${oddCount}`);
// console.log("-".repeat(60));

// // Q3. Positive, Negative, or Zero

// let numPosNeg = -25;
// if (numPosNeg > 0) console.log("Positive");
// else if (numPosNeg < 0) console.log("Negative");
// else console.log("Zero");
// console.log("-".repeat(60));

// // Q4. Smallest number

// let arr2 = [67, 45, 99, 12, 88, 54];
// console.log("Smallest number:", Math.min(...arr2));
// console.log("-".repeat(60));

// // Q5. Leap year check

// let year = 2028;
// let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// console.log(isLeap ? "Leap year" : "Not a leap year");
// console.log("-".repeat(60));

// // --- Section B: Loops ---

// // Q6, Q7, Q8: Print 1-50, Evens 1-100, Odds 1-100

// for (let i = 1; i <= 50; i++) process.stdout.write(i + " ");
// console.log("\n" + "-".repeat(60));

// // Q9. Multiplication Table (8)

// let base = 8;
// for (let i = 1; i <= 10; i++) console.log(`${base} * ${i} = ${base * i}`);
// console.log("-".repeat(60));

// // Q12. Reverse String

// let str = 'JavaScript';
// console.log(str.split("").reverse().join("")); 

// // Or manual loop: 

// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) 
//     reversed += str[i];

// console.log(reversed);

// console.log("-".repeat(60));

// // Q15. Countdown 20 to 1

// let count = 20;
// while (count >= 1) { console.log(count); count--; }
// console.log("-".repeat(60));

// // --- Section C: Switch Statements ---

// // Q16. Day Name

// let day = 5;
// switch (day) {
//     case 1: console.log("Sunday"); 
//     break;
//     case 2: console.log("Monday"); 
//     break;
//     case 3: console.log("Tuesday");
//     break;
//     case 4: console.log("Wednesday");
//      break;
//     case 5: console.log("Thursday");
//      break;
//     default: console.log("Invalid Day");
// }
// console.log("-".repeat(60));

// // Q17. Calculator

// let n1 = 10, n2 = 20, operator = "*";

// switch (operator) {
//     case "+": console.log(n1 + n2); break;
//     case "-": console.log(n1 - n2); break;
//     case "*": console.log(n1 * n2); break;
//     case "/": console.log(n1 / n2); break;
//     default: console.log("Invalid Operator");
// }
// console.log("-".repeat(60));

// // --- Section D: Array & Object Manipulation ---

// // Q19. Sum of Array 

// let nums = [10, 20, 30, 40, 50];
// console.log("Sum:", nums.reduce((acc, curr) => acc + curr, 0));
// console.log("-".repeat(60));

// // Q21/22. Duplicates

// let dupArr = [10, 20, 10, 30, 40, 20, 50];
// let unique = [...new Set(dupArr)]; // Efficient way to remove duplicates
// console.log("Unique array:", unique);
// console.log("-".repeat(60));

// // Q25. Move zeros to end

// let zeros = [0, 5, 0, 8, 10, 0, 15];
// let result = [...zeros.filter(n => n !== 0), ...zeros.filter(n => n === 0)];
// console.log("Zeros at end:", result);

// test 01

// Q1. 1. Write a function isEven(num) that returns true if the number
// is even, otherwise false

let isEven = (num) => num % 2 === 0;
console.log(isEven(4)); // true

console.log("-".repeat(70));

// Q2. 2. Print numbers from 1 to 10 using a for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("-".repeat(70));

// Q.3 Print numbers from 10 to 1 using a while loop

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

console.log("-".repeat(70));

// Q.4 Using a do...while loop, print numbers from 1 to 5

let j= 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

console.log("-".repeat(70));

    // Q5. 5. Check whether a number is Positive, Negative, or Zero
// using if...else.

let number = -5;

if(number>0){

    console.log("positive")

} else if(number<0){

    console.log("negative")

} else {

    console.log("zero")
}   

console.log("-".repeat(70));

// Q6. 6. Given const student={name:'Payal', age:22, city:'Ujjain'},
// print all keys using for...in.

const student1 = {name: 'Payal', age: 22, city: 'Ujjain'};

for (let key in student1) {
    console.log(key);
}
    
console.log("-".repeat(70));

// Q7. 7. Given const marks=[75,82,91,64], print every value using
// for...of.

let marks = [ 75,82,91,64 ] ;

for (let mark of marks) {

    console.log(mark);
}


console.log("-".repeat(70));

// Q8. 8. Create a function findLargest(a,b) that returns the larger
// number.


let a = 10;
let b = 20;

if(a>b){
    console.log(a)
}
else{
    console.log(b)
}

console.log("-".repeat(70));

// Q9. 9. Print only even numbers from 1 to 20 using a for loop.

let number1 = 20;

for (let i = 1; i <= number1; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("-".repeat(70));

// Q10. 10. Ask yourself: What is the difference between for...in and
// for...of? Write one example of each

// part 01

// for...in (used with objects) 

let student = {name: 'shubham', age: 19, city: 'Ujjain'};

for (let key in student) {

    console.log(key);
}

console.log("-".repeat(70));

// part 02

// for...of (used with iterable objects like arrays)

const markss = [75, 82, 91, 64];

for (let mark of markss) {
    console.log(mark);
}



