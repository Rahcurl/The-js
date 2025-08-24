console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2 == 1)
console.log(2!=1)

console.log("string")

//typescript doesn't allow different dataTypes in comparision
//for eg ,
console.log("2" > 1) //true
console.log("02" > 1) //true

console.log("null")

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true


//undefined will give the value false
console.log("undefined")
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
/* 
the reason is thatan equility check == and comparision > <>= <= work differently .

comparisions converts null to a number ,treating it as 0.
that's why
3. null >= 0 is true and,
1.null > 0 is false 
*/


