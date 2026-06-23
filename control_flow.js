let age = 20;

if(age<=12&&age<=20){
    console.log("eligible")}
else{
    console.log("not eligible")
};

let num =10;

if(num%2===0){
console.log("even number")
}else{
    console.log("odd number")
}

let age1 = 18;

if(age1>=18){
    console.log(
        "you can vote"
    )
}else{
    console.log(
        "you cannot vote")
    
}

let number = -5;


if(number>0){
    console.log("positive")
}
else if (number<0){
    console.log("nagatve")
}
else
{
    console.log("zero")
}

let a = 10 ;
let b = 20;
let c = 30;

if (( a>b || a>b) && c>b){
console.log("right")
}
else{
    console.log("wrong")
}

let age3 = 30;

if(age3>=18){
    console.log("Adult");

}else
{
    console.log("minor")
}

let marks = 32;

if(marks>=33){
    console.log("pass")
}
else{
    console.log("fail")
}

let temp = 29;

if(temp>=30){
    console.log(
        "Hot"
    )
}
else if (temp<30){
    console.log(
        "Cool"
    )
}
else{
    "Cool"
}

let x = 10;
let y = 20;
let z = 30;

if(x>y){
    console.log("true")
}
else if (y>z){
console.log("right")
}

else if(z>y){
    console.log("yes")
}
else{
    console.log("Not find the value")
}
let a1 = 10;
let b1 = 25;
let c1 = 15;

if (a1 > b1 && a1 > c1) {
    console.log("A is greatest:", a1);
} 
else if (b1 > a1&& b1 > c1) {
    console.log("B is greatest:", b1);
} 
else {
    console.log("C is greatest:", c1);
}

let year = 2026;

if(year%400===0){
console.log("leap year")
}
else if(year%4 && year%100!==0){
    console.log(
        "Leap year"
    )
}
else{
console.log("Not leap year")
}

// student school form  

let agee =20;
 let markss = 70;
 let attendence = "75%";
 let grade = 80;


if((agee>=18&&markss>=60&&grade>=90&&attendence>="75%" )){
    console.log(" you are eligible for addmiss ion")
}
else if(agee<18){
    console.log("age requirement not met")
}
else if(markss<60){
    console.log("marks requirtment not met")
}
else if(90<grade) {
console.log("grade requirment not met")
}
else{
    console.log("attendence requirmetn not met")
}
let balance =10000;
let pin = 1234;
let enteredpin = 1234;
 let withrawamount = 2000;
 let depositamount = 12000;

 if(enteredpin===pin){
    console.log(
        "login succesfull"
    )
 }
 else if(enteredpin!=pin){
    console.log("Wrong pin")
 }

 else if( balance<=withrawamount){
console.log("withdraw")
 }

 else if (depositamount>=balance&&depositamount<balance){
    console.log("premium account")
 }

else{
    console.log(
        "invaild choice"
    )
}
console.log("-".repeat(60))

// vote 

let ageee = 18;
let education = "10th";
let city = "ujjain";
let state = "UP";
let country = "india";

if((ageee>18&&education==="11th" )&&(city="ujain"||education ==="uk")){
console.log( "you are eligible for vote")
}
 else if (ageee < 18) {
    console.log("Not eligible: Age must be 18+");
}
else if (education !== "12th") {
    console.log("Not eligible: Education requirement not met");
}
else if (city !== "ujjain" && state !== "MP") {
    console.log("Not eligible: Location requirement not met");
}
else if (country !== "india") {
    console.log("Not eligible: Country requirement not met");
}
else {
    console.log("You are eligible for vote");
}





    


