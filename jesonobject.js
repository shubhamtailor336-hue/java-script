
//  java script object
let person={
    name:"john",
    age:30,
    city:"new york"
}

// java script objet notetion(JSON)
let person1={
    "name":"john",
    "age":30,
    "city":"new york"
}

let  student={
    "name":"jshubham",
    "address":{
        "street":"123 main st",
        "city":"los angeles",
        "state":"CA"
    },
    "education":{
        "sclool":"10,12th",
        "college":"Btech"
    },
    "skills":["html","css","javascript"],

     "hobbies":["reading","singing","cooking"],

}   
console.log(student)


let hostel={

    "student":{
"category":{
"obc":100,
"sc-st":50,
"general":50
}},

"room":100,
"bathroom":10,
"canteen":1,
"gaurd":1
    
}

console.log(hostel)

let mam ={
  "name": "Payal",
  "age": 25,
  "isStudent": false,
  "skills": ["HTML", "CSS", "JavaScript"],
  "address": {
    "city": "Jaipur",
    "country": "India"
  }
}
// 1️⃣ JSON.parse() — Convert JSON string → JavaScript object

let jsonData = '{"name": "Payal", "age": 25, "city": "Jaipur"}';

let user = JSON.parse(jsonData);

console.log(user.name); // Output: Payal
console.log(user.age);  // Output: 25

// 2️⃣ JSON.stringify() — Convert JavaScript object → JSON string

let folder ={
    file1:"array",
    file2:"object",
    file3:"function",
    file4:"loop",
    file5:"variable"
}

let  data = JSON.stringify(folder);
console.log(data)

console.log("-".repeat(60))

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Headphones", price: 2000 },
  { name: "Mouse", price: 800 }
];

// Convert to JSON string (for saving or sending)

let jsonProducts = JSON.stringify(products);
console.log(jsonProducts);

// Later, when we need to use it:

let productList = JSON.parse(jsonProducts);

productList.forEach((item) =>{
  console.log(`${item.name} costs ₹${item.price}`);
});

