//{for numbers} 

let score = "33abc" //represent string
//let score = null // -->0 will fetch for valueInNumber
//let score = true //will fetch 1
//let score = undefined //
//let score = 33 -->represent number
//console.log(typeof score)
//console.log(typeof(score))
/*
suppose we are playing the pokempn game from where player get the result in number to know the score.,we dont know how the backend is functioning ,do for this we changes the value into Number form.
*/
//assign the variable
let valueInNumber = Number(score)//write the datatypes in Uppercase for the first letter
console.log(typeof valueInNumber)
console.log(valueInNumber)
/* what if the score is not only the numbers like 33 , if there is 33abc ,will it converted to number */
//lets see
//its converted to number but what is the value we got?
//console.log(valueInNumber) //value --> NaN




//{for boolean value}
/* 
//let isLoggedIn = 1 //will fetch true
//let isLoggedIn = "" //false
let isLoggedIn = "Ram" //true for value string is there
let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn)
*/


//{for string}
let someNumbers = null
let stringValue = String(someNumbers)
console.log(stringValue)
console.log(typeof stringValue)

let value = 3
let negValue  = -value
console.log(negValue)

console.log(2+3)
console.log(2**2)
console.log(2/3)
console.log(2%3)

//adding strings

let str1 = "hello"
let str2 = " Rahul" //space infront of name
//add or concatenate
let str3 = str1 + str2
console.log(str3)

//priority
console.log("1" + 2) // output 12
console.log(1 + "2") //output 12
console.log("1" + 2 + 2) //you are thinking that there will be 14 in output but output --> 122
console.log(1 + 2 + "2") //output 32

console.log((3 + 3) * 4 % 5) //use parenthesis as much you can in this type of operation

/* 
console.log(+true) //will fetch true
console.log(true+) //error
*/


let num1, num2, num3
num1 = num2 = num3 =(2+2)

let gameCounter = 100
gameCounter++;

console.log(gameCounter)

//lets dive into prefix and postfix increment
let x = 3;
const y = x++; // y gets the OLD value of x (3), then x becomes 4
// output y = 3  and x = 4
let a = 3;
const b = ++a; // a is incremented to 4 first, then b gets that value
//output a = 4 and  b = 4