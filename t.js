 let num1 = 45;
let num2 = 78;

if(num1 > num2){
  console.log("largest number num1");
}

else{console.log("largest number num2")};


let number = 20;
while(number>0){
console.log(number);
number--;
};

let num = [10, -5, 8, -2, 15, -9, 20];

let positive = 0;
let negative = 0;
for(let i = 0; i < num.length; i++){
    if(num[i] > 0){
       positive++
      }else{negative++}
};

let student = {
    name:"Payal",
    age:22,
    city:"Indore"
};

for(let key in student){
    console.log(key);
}

let colors = ["Red","Green","Blue"];

for(let color of colors){
    console.log(color);
}

for(let i=1;i<=5;i++){

    if(i==3){
        continue;
    }

    console.log(i);

}

for(let i=1;i<=5;i++){

    if(i==3){
        break;
    }

    console.log(i);

}