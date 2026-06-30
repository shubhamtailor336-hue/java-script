// --- Section A: Conditionals & Basic Logic ---

// Q1. Find the largest number\

let arr1 = [45, 12, 89, 34, 67, 23];
let largest = Math.max(...arr1);
console.log("Largest number:", largest);
console.log("-".repeat(60));

// Q2. Count total even and odd numbers

let arr = [12, 7, 9, 20, 15, 18, 3, 6];
let evenCount = 0, oddCount = 0;
arr.forEach(num => (num % 2 === 0 ? evenCount++ : oddCount++));
console.log(`Even: ${evenCount}, Odd: ${oddCount}`);
console.log("-".repeat(60));

// Q3. Positive, Negative, or Zero

let numPosNeg = -25;
if (numPosNeg > 0) console.log("Positive");
else if (numPosNeg < 0) console.log("Negative");
else console.log("Zero");
console.log("-".repeat(60));

// Q4. Smallest number

let arr2 = [67, 45, 99, 12, 88, 54];
console.log("Smallest number:", Math.min(...arr2));
console.log("-".repeat(60));

// Q5. Leap year check

let year = 2028;
let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeap ? "Leap year" : "Not a leap year");
console.log("-".repeat(60));

// --- Section B: Loops ---

// Q6, Q7, Q8: Print 1-50, Evens 1-100, Odds 1-100

for (let i = 1; i <= 50; i++) process.stdout.write(i + " ");
console.log("\n" + "-".repeat(60));

// Q9. Multiplication Table (8)

let base = 8;
for (let i = 1; i <= 10; i++) console.log(`${base} * ${i} = ${base * i}`);
console.log("-".repeat(60));

// Q12. Reverse String

let str = 'JavaScript';
console.log(str.split("").reverse().join("")); 

// Or manual loop: 

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) 
    reversed += str[i];

console.log(reversed);

console.log("-".repeat(60));

// Q15. Countdown 20 to 1

let count = 20;
while (count >= 1) { console.log(count); count--; }
console.log("-".repeat(60));

// --- Section C: Switch Statements ---

// Q16. Day Name

let day = 5;
switch (day) {
    case 1: console.log("Sunday"); 
    break;
    case 2: console.log("Monday"); 
    break;
    case 3: console.log("Tuesday");
    break;
    case 4: console.log("Wednesday");
     break;
    case 5: console.log("Thursday");
     break;
    default: console.log("Invalid Day");
}
console.log("-".repeat(60));

// Q17. Calculator

let n1 = 10, n2 = 20, operator = "*";

switch (operator) {
    case "+": console.log(n1 + n2); break;
    case "-": console.log(n1 - n2); break;
    case "*": console.log(n1 * n2); break;
    case "/": console.log(n1 / n2); break;
    default: console.log("Invalid Operator");
}
console.log("-".repeat(60));

// --- Section D: Array & Object Manipulation ---

// Q19. Sum of Array 

let nums = [10, 20, 30, 40, 50];
console.log("Sum:", nums.reduce((acc, curr) => acc + curr, 0));
console.log("-".repeat(60));

// Q21/22. Duplicates

let dupArr = [10, 20, 10, 30, 40, 20, 50];
let unique = [...new Set(dupArr)]; // Efficient way to remove duplicates
console.log("Unique array:", unique);
console.log("-".repeat(60));

// Q25. Move zeros to end

let zeros = [0, 5, 0, 8, 10, 0, 15];
let result = [...zeros.filter(n => n !== 0), ...zeros.filter(n => n === 0)];
console.log("Zeros at end:", result);
