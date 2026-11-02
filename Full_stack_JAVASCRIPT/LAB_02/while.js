// // While loop
console.log("--------while_loop-----------------")
let i = 0;
while (i<10) {
    console.log("hello") 
    i++;
}




// // DoWhile loop 
console.log("--------------Do while_loop-------------")
let j = 0;
do{
    console.log(j)
    j++;
}while (j<10);





// Take the use input (Prompt Method)
let n = prompt("What is your name?");
console.log(n);          // by default the enterd datatype is string 
console.log(typeof n);





//Type-casting - Number Method
console.log("--------------Number-----------------")
let age = prompt("What is your age?");
age = Number(age);
console.log(age);
console.log(typeof age);

// //Type-casting - Parse int Method
// console.log("----------parseint----------")
// let weight = prompt("What is your weight?");
// weight = parseInt(weight);
// console.log(weight);
// console.log(typeof weight);

//Type-casting - Parse float Method
console.log("----------parseint----------")
let weight = prompt("What is your weight?");
weight = parseFloat(weight);
console.log(weight);
console.log(typeof weight);



//  Back tick(`) method --similar to f"" in python
console.log(`my weight is ${weight} kg`);    // Optimal method
console.log("my weight is" + weight + "kg");
console.log("my weight is", weight , "kg");










// Math functions =============================================================
const marks = [56, 75, 88.5, 92, 65 ];

// const min_marks = Math.min(marks);            //Math.min(marks) = Math.min([56, 75, 88.5, 92, 65 ])         
// const min_marks = Math.min(56, 75, 88.5, 92, 65);     // both statements are not equal


const min_marks = Math.min(...marks);     //Spread operator(...marks) : [56, 75, 88.5, 92, 65 ] --> 56, 75, 88.5, 92, 65 
const max_marks = Math.max(...marks); 
console.log(min_marks);
console.log(max_marks);


console.log(Math.ceil(4.245));
console.log(Math.floor(4.245));
console.log(Math.round(4.245));