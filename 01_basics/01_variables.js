//accountName → ✅ Best for JavaScript variables/functions. --> Camel case

//account_name → ✅ Best for Python or database fields. --> snake case

//AccountName → ✅ Best for classes/components. --> pascal case

//account-name -> ✅ Best for html , css and urls,not valid for JS --> Kebab case

const accountId = 1234  
let accountEmail = "coderpen@gmail.com"
var accountPassword = "12345"
accountCity = "butwal"
let accountState;
//accountId = 12 --> will fetch TypeError : assignment to constant variable because accountId is constant variable

accountEmail = "hello@gmail.com"
accountPassword = "45678"
accountCity = "Pokhara"

console.log(accountId)

//we again type console.log for execute the each variable ,so that we use console.table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 
/*
prefer not to use var
because of issue in block scope and functional scope
*/