// test 

// section A

// 1.1. Find the largest number from: let arr = [45,12,89,34,67,23];

 let arr1 = [45,12,89,34,67,23];
largest = Math.max(...arr1)
console.log(largest)

 console.log("-".repeat(60))

//  2.Q2. Count total even and odd numbers in: let arr = [12,7,9,20,15,18,3,6];

let arr = [12,7,9,20,15,18,3,6];

let evennum = 0;
let oddnum = 0;

for(let num of arr){
if (num % 2 === 0) {
        evennum++;
    } else {
        oddnum++;
    }
}

console.log("even number",evennum);
console.log("odd number" , oddnum);

 console.log("-".repeat(60))

// Q3. Check whether the number is Positive, Negative or Zero: let num = -25;

let num2 = -25

if (num2 > 0) {

    console.log("Positive");

} else if (num2< 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

 console.log("-".repeat(60))

// Q4. Find the smallest number from: let arr = [67,45,99,12,88,54];

let arr2 = [67, 45, 99, 12, 88, 54];
let smallest = Math.min(...arr2);
console.log(smallest); // 12

 console.log("-".repeat(60))

// 5. Check whether the year is a leap year: let year = 2028;

let year = 2028;
if(year%400===0){
    console.log("leap year")
}
else{
   console.log("not leap year")
}

 console.log("-".repeat(60))


//  section B loops

// Q6. Print numbers from 1 to 50 using a for loop.

for(i=1;i<=50;i++){
    console.log(`${i}`)
}

// Q7. Print all even numbers between 1 and 100.

for(i=2;i<=100;i+=2){
    console.log(`${i}`)
}
 console.log("-".repeat(60)) 

// Q8. Print all odd numbers between 1 and 100.

for(i=1;i<=100;i+=2){
    console.log(`${i}`)
}

 console.log("-".repeat(60))

// Q9. Print the multiplication table of: let num = 8;

for(i=1;i<=10;i++){
    c = 8;
    console.log(`${c}*${i} = ${c*i}`)

}

 console.log("-".repeat(60))

//  Q12. Reverse the string without using .reverse(): let str = 'JavaScript';

let str = "JavaScript";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];

}  console.log(reversed);


console.log("-".repeat(60))
// Q15. Print numbers from 20 to 1 using a while loop.
let number = 20;

while(number>=1){

    console.log(number);

    number--
}
  
console.log("-".repeat(60))
// section C switch 

// Q16. Display day name using switch: let day = 5

let day = 5;
switch(day){
          case 1:
        console.log("sunday")
          case 2:
        console.log("monday")
          case 3:
        console.log("tuesday")
          case 4:
        console.log("wednesday")
          case 5:
        console.log("thursday")
}
 console.log("-".repeat(60))

// Q17. Create a calculator using switch: num1=20, num2=10, operator='*';

let num1 = 10;
let num3 = 20;
let operator ="*";
let result;

switch(operator){
    case"+":
    result =num1+num3;
    break;

     case"-":
    result =num1-num3;
    break;
     case"*":
    result =num1*num3;
    break;
     case"/":
    result =num1/num3;
    break;
    default:
        console.log("invailid num")
}
console.log("result",result);

console.log("-".repeat(60))
// Q18. Display month name using switch: let month = 11

let month1=11;

switch(month1){
    case 1:
        console.log("january")
        break;
        case 2:
        console.log("february")
        break;
        case 3:
        console.log("march")
        break;
        case 4:
        console.log("april")
        break;
        case 5:
        console.log("may")
        break;
        case 6:
        console.log("jun")
        break;
        case 7:
        console.log("july")
        break;
        case 8:
        console.log("august")
        break;
        case 9:
        console.log("september")
        break;
        case 10:
        console.log("octomber")
        break;
        case 11:
        console.log("november")
        break;
        case 12:
        console.log("december")
        break;
}

console.log("-".repeat(60))

// section D Array 

// Q19. Find the sum of: [10,20,30,40,50]

let numbers= [10,20,30,40,50]
let sum =  0;

for(let i=0;i<numbers.length;i++){
 sum = sum+numbers[i]
}
console.log("sum = ",sum)

 console.log("-".repeat(60))

// Q29. Print all keys and values using for...in from: {name:'Rahul', age:22, course:'MERNStack', city:'Indore'}

let info = 
{name:'Rahul',
age:22, course:'MERNStack', 
city:'Indore'}

for(let key in info){
    console.log(`${key}:${info[key]}`)
}
 console.log("-".repeat(60))

//  Q30. Count the total properties in: {id:101, name:'Amit', department:'IT', salary:50000,
// city:'Pune'}

let employee = {id:101, 
    name:'Amit', 
    department:'IT',
    salary:50000,
    city:'Pune'};

    let totalproperties = Object.keys(employee).length;

    console.log(totalproperties)

    console.log("-".repeat(60))