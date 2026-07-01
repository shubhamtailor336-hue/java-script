let object = {
    name:"shubham",
    age:19,
    education:"B.tech"
}
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));

console.log("-".repeat(70));

let person ={
    name: "ashish",
    class:"12th",
    institute:"schoool"
}

console.log(person);
console.log("-".repeat(70));
console.log(Object.keys(person));
console.log("-".repeat(70));
console.log(Object.values(person));
console.log("-".repeat(70));
console.log(Object.entries(person));
console.log("-".repeat(70));

let obj1 = {
    a:1,
    b:2,
    c:3,
}
let obj2={
    c:4,
    d:5,
    e:6
}

 let object3= Object.assign(obj1,obj2);
console.log(object3);

let object4= Object.assign({},obj1,obj2);
console.log(object4);

let car = {};
Object.defineProperty(car, "brand", {
  value: "Toyota",
  writable: false, // Cannot be modified
  enumerable: true
});

console.log(car.brand); // Output: Toyota
car.brand = "Honda"; // No effect
console.log(car.brand); // Output: Toyota
console.log("-".repeat(70));

let user ={
    name:"shubham",
    age:19,
    education:"B.tech"
}

delete user.age;
delete user.education;
console.log(user);

console.log("-".repeat(70));

let person1 = { name: "Alice", age: 25 };

console.log(Object.keys(person1)); // Output: ["name", "age"]

console.log("-".repeat(70));

console.log(Object.values(person1)); // Output: ["Alice", 25]

let frozen = { name: "shubham" };
Object.freeze(frozen);

frozen.name = "dhruv"; // No effect
console.log(frozen.name); // Output: shubham

let sealed = { name: "shubham" };
Object.seal(sealed);

sealed.name = "mumma"; // Allowed
delete sealed.name; // Not allowed
console.log(sealed); // Output: { name: "mumma" }
