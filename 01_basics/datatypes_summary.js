//on the basis of storing data and accessing them datatypes is categorized into premitive and non-premitive

//Primitive : 7types : Number, Boolean, null, indefined, Symbol, BigInt

//Reference (Non-Primitive)

//Array,Objects, Functions

/*
javascript is a dynamically typed value means : 

You don’t have to declare variable types (like int, string, etc.).
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//declaring symbol as datatype
const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 457896521232n
console.log(typeof bigNumber);


/*  2 === "2"   // false (number !== string)
0 === false // false (number !== boolean)
5 === 5     // true  (same type & same value)
*/

//array and object difference

//array in square bracket [] and objects in curly Braces {}

const heros = ["Biraj", "jharna", "Dilip"]

let myObj =
{
    name : "Rahcurl",
    age : 22,
}

//functions 
let myFunction = function(){
    console.log("Go ahead");
    
}
console.log(typeof userEmail);
console.log(typeof myFunction);
console.log(typeof myObj);


