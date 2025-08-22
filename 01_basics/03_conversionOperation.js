//{for numbers} 

//let score = "33abc" //represent string
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
//let valueInNumber = Number(score)//write the datatypes in Uppercase for the first letter
//console.log(typeof valueInNumber)
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