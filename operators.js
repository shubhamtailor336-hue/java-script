//  Operators 

// 1. Arithmetic Operators

let a = 4;
let b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
 console.log(13+14);

 console.log("-".repeat(60));

// 2. Assignment Operators

console.log(a=b); // OUT PUT - 5
console.log(a+=b); //OUT PUT - 10
console.log(a-=b);//OUT PUT - 5
console.log(a*=b);//OUT PUT - 25
console.log(a/=b);//OUT PUT - 5
console.log(a%=b);//OUT PUT - 0

 console.log("-".repeat(60));

// 3. Comparison Operators

let x = 10;
let y = 12;

console.log(x=="10");
console.log(x==y);
console.log(x===10);
console.log(x===y);
console.log(x==="10");
console.log(x!=y);
console.log(x!==y);
console.log(x>=y);
console.log(x<=y);

console.log("-".repeat(60));

// 4. String Operators

console.log("x+y");
console.log("Hello+world")

let str1 =" Hello";
let str2 = "world" ;

console.log(str1+str2);

let str3= "js is Awesome";
console.log(str1+str2+str3);

console.log("-".repeat(60));

// 5. Logical Operators

console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

console.log(x<y && x<y);

console.log(x==y||x!=y);

console.log( x=10 , y = 20);

console.log(x<y||x==y);

console.log(!true);

console.log( !x!=y)

console.log("-".repeat(60));

// 6. Ternary Operator

    let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult

let name = "shubham";
let name1 = (name =="shubham") ? "Yes" : " NO" ;
console.log(name1);

let name2 = "rashii";
let name3 = (name2 =="rashii") ? "Yes" : " NO" ;
console.log(name3);

console.log("-".repeat(60));

// 7. Type Operators

console.log(typeof(name));
console.log(typeof(str1));
console.log(typeof(x));
console.log(typeof(true));
console.log([1, 2, 3] instanceof Array); // true
