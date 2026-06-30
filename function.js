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


