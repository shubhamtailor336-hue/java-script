// stringmethods

// 1.length (before signup)

let username = "rudra 1236";
console.log(username.length);

let text = "JavaScript is amazing!";
console.log(text.length); // 22

let password = "SSSS123";
if (password.length < 8) {
  console.log("Password too short!");
}

let char = "";
console.log(char.length === 0); // true

console.log("-".repeat(60));

// 2. toUpperCase()

let name = "john";
console.log(name.toUpperCase()); // JOHN

let father = "shyam";
console.log(father.toUpperCase());

let heading  = "java script language";
console.log(heading.toUpperCase());

console.log("-".repeat(60));

//3. toLowerCase()

let email = "USER@MAIL.COM";
console.log(email.toLowerCase()); // user@mail.com

let search = "JavaScript";
console.log(search.toLowerCase()); // javascript

let city = "NEW YORK";
console.log(city.toLowerCase()); // new york

let storedUser = "admin";
let enteredUser = "ADMIN";
console.log(storedUser === enteredUser.toLowerCase()); // true

console.log("-".repeat(60));

// 4. includes()

// Check if email contains “@”

let email1 = "shubham@mail.com";
console.log(email1.includes("@")); // true

let email2 = "rashii@mail.com";
console.log(email2.includes("#")); // false

// Search for a keyword in text

let article = "JavaScript is beginner friendly.";
console.log(article.includes("beginner")); // true

// Check file extension

let file = "resume.pdf";
console.log(file.includes(".pdf")); // true

let hey= "hey.pdf";
console.log(hey.includes(".jpg")); // true

// Check product name in cart

let cartItem = "iPhone 14 Pro";
console.log(cartItem.includes("iPhone")); // true

 let item = "vivo y400 pro";
 console.log(item.includes("vivo"));

 console.log("-".repeat(60));

//  5. startsWith()


// Check country code in phone number

let phone = "+91-6260961248";
console.log(phone.startsWith("+91"));

// Check website URL

let url = "https://google.com";
console.log(url.startsWith("https")); 
 
let web = ".codewhithshubham.com";
console.log(web.startsWith(".code"));

// Check sentence beginning

let sent = "MY name is shubham tailor";
console.log(sent.startsWith("my")); //false

console.log("-".repeat(60));

// 6. endsWith()

// Check file type

let filename = "index.doc";
console.log(filename.endsWith(".doc"));//true

let  filename2 = "index.file";
console.log(filename2.endsWith(".com"));//false

// Check domain name

let email3 = "shubham.gmail.com";
console.log(email3.endsWith(".com"));//true

let site = "e-commarce.in";
console.log(site.endsWith(".in"));//true

let site1= "e-commarce.in";
console.log(site1.endsWith(".com"));//false

console.log("-".repeat(60));

// 7. indexOf()

// for example

// Find position of “@” in email
let email5 = "shubham33@gmail.com";
console.log(email5.indexOf("@"));

// Check if word exists

let words = "i am student of RGPV university";
console.log(words.indexOf("of"));  

// Check if word is missing

let msg = "Hello World";
console.log(msg.indexOf("Python")); // -1

// Find space in a string

let name1 = "shubham tailor";
console.log(name1.indexOf(" ")); // 4

console.log("-".repeat(60));

// 9. replace()

let text2 = "I love Java";
console.log(text2.replace("Java", "JavaScript")); // I love JavaScript

let number = "+91-6260961248";
console.log(number.replace("1248","2112"));

let student = "shubham tailor"; //shubham tailor 
console.log(student.replace(" ","-"))//shbham-tailor

console.log("-".repeat(60));

// 10. trim()

// Clean user input

let username1 = "   rashii   ";
console.log(username1); //   rashii
console.log(username1.trim()); // rashii


// Validate form input

let username6 = "  ashish1234  ";
console.log(username6.trim());

// 11. concat()

// Combine first name and last name
let name10 = "shubham";
let name11 = "rashii";
console.log(name10.concat(" " ,name11));//space
console.log(name10.concat(name11));//no space 

// Add domain to username
let username10= "user123";
console.log(username10.concat("@gmail.com")); // user123@gmail.com

let age ="12";
console.log(age.concat("shubham"));

console.log('-'.repeat(60));
// 12. split()

let sentence = "I love JavaScript";
console.log(sentence.split(" ")); // ["I", "love", "JavaScript"]

let data = "shubham , rashi , krish , ashu";
console.log(data.split("shubham"));
console.log(data.split(","));

let word = "shubham";
let word2 = "Hello"
console.log(word2.split(""))
console.log(word.split("")); // ["H", "e", "l", "l", "o"]

console.log("-".repeat(60));

// 13. substring(start, end)

// Get first 4 letters of a name

let name4 = 'shubham';
console.log(name4.substring(0,6));

let date = "2026-06-01";
console.log(date.substring(0,4));

console.log( date.substring(8,10))

console.log(date.substring(5,7))

let fullname = "shubham tailor"
console.log(fullname.substring(8))

console.log("-".repeat(60));

// 14. charAt(index)

// Get first character of name

let name5 = "shubham";
console.log(name5.charAt(0)); // s

// Find last characterFind last character

let word3 = "Hello";
console.log(word3.charAt(word3.length -1)); // o

// Check initial letter of username

let username12 = "unique_beam";
console.log(username12.charAt(0)); // u

// Extract middle character

let str = "abcde";
console.log(str.charAt(2)); // c

console.log("--".repeat(50)); // .....

// 15. repeat()

// Create loading animation

console.log(".".repeat(5)); // .....
console.log("*".repeat(5)); // *****



