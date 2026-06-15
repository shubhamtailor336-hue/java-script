// literal array
let arr=["24"," shubham","krish",12,34,56,78,67,7,9,8]
console.log(arr);
// contstuctor array
 let num = new Array("shubham",7 ,9,8,6,5,4,4,4,4)
 console.log(num);

//  ---------------------------MTHODES adding and removing element-------------------------------

// 1.push() method
let arr1=["24"," shubham",12,34,78,67,7,9,8]
arr1.push(3,5);
console.log(arr1);
let nums=[4 , 6, 7 , 9 ,7,7,5 ,6 ,4]
nums.push(2 , 6 , "shubham");
console.log(nums);
// 2.pop() method
 
arr.pop();
console.log(arr);
nums.pop();
console.log(nums);


// unshift method

arr.unshift(0,0,0);
console.log(arr);
nums.unshift(1,1,1,1,1)
console.log(nums);

// shift method
arr.shift();
arr.shift();
arr.shift();
console.log(arr);

// splice method

let age=[12,13,14,15,16,17,18,19,"dipu"]
console.log(age);
age.splice( 6,2,"shubham");
console.log(age);
age.splice( 2,6,"shubham");
console.log(age);

// slice method

 let newage=[10,20 ,40,50,60,70,80,90,100];

let newage1=newage.slice(2,4);

 console.log(newage1);

let newage2=newage.slice(2,6)
console.log(newage2);

//  Searching and Finding Elements
console.log("---------------------------------------------")
// 1.indexOf() method

let number=[ 1,2,3,4,5,6,7,8,9];
console.log(number.indexOf(6));
console.log(number.indexOf(9));

// lastindex() method

let num1=[12,1,34,10,10,10,10,13,13,13,10];

console.log(num1.lastIndexOf(10));

console.log(num1.lastIndexOf(13));
console.log(num1.lastIndexOf(34));

// include method

let name=["rashii","ashu","krish","sachin","shubham"];
console.log(name.includes("rashii"));
console.log(name.includes("shubham"));
console.log(name.includes("suma"));
console.log(name.includes(20));


// find()  method

let sum=[10,18,25,35,46,78,90,89,57,78]
let found=sum.find(num=>num>25)
console.log(found);
let found1=sum.find(num=>num<25)
console.log(found1);

// findindex method

let sum1=[10,18,25,35,46,78,90,89,57,78]
let index =sum1.findIndex(num=>num>25)
console.log(index);
let index1=sum1.findIndex(num=>num<25)
console.log(index1);
