for(let i = 1; i<=30 ; i++){
    console.log(`Student ${i} is present`)
}
console.log('-'.repeat(70))

let days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

for(i=0;i<days.length;i++){
    console.log(days[i])

}

console.log('-'.repeat(70))


let Month = ['Jan','Feb','March','April','May','Jun','July','Aug','Sep','Oct','Nev','Dec'];

for(i=0;i<Month.length;i++){
    console.log(Month[i])

}

console.log('-'.repeat(70))

for( let e = 1; e <= 10; e++){
    c = 2;
    console.log(`${c}*${e} = ${c*e}`)
}


console.log('-'.repeat(70))


for ( let b = 1; b <= 10; b++){
    let c = 5;
    console.log(`${c} * ${b} = ${c * b} `);
};

let balance1 = 5000;

while (balance1 > 0) {
    console.log("Remaining Balance:", balance1);
    balance1 -= 2000;
}

console.log("Balance Finished");

// do while loop index.html me practice kiya he 

console.log("-".repeat(70))

// for in loop

const object= {
    name:"shubham",
    age: "19 year",
    skils:"frontend devloper"
}
for(let key in object){
    console.log(`${key}:${object[key]}`);
}
console.log("-".repeat(70))

const student = {
  name: "John",
  age: 16,
  grade: "10th",
};
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

console.log("-".repeat(70))

let cart = {
    book:"20ruppes",
    pen:"5rupees",
    pencil:"20rupees"

}
for( let item in cart){
    console.log(`${item}:${cart[item]}`)
}
console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
let studentID ={
    name: "sandeep",
    education:"B.tech",
    year: "final year"
}
for(let key in studentID){
    console.log(` your ${key}:${studentID[key]}`)
}

console.log("-".repeat(70))

// for...of loop

let names =["shubham","rashi","krish","ashu"];

for(let key of names){
    console.log(key)
}

let post = ["intern","devloper","softwear engineer","senior devloper"]

for(let key of post){
    console.log(key)
}

 console.log("-".repeat(70))
let position = ["teacher","moniter","principle","director","HOD"]

for(let key of position){
    console.log(key);
}


    


