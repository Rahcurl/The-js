const name = "Rahcurl"
const repoCount = 20

console.log(`Hello! my name is ${name} and my repo Count is ${repoCount}`);
const gameName = new String("Rohit")
console.log(gameName[0]); //R
console.log(gameName.__proto__);// {}
console.log(gameName.toUpperCase());//ROHIT
console.log(gameName.toLowerCase());//rohit
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'))
console.log(gameName.length);
const newString = gameName.substring(0,3)
console.log(newString)
const anotherString = gameName.slice(-5,4,2)
console.log(anotherString)
const newStringOne = "  hello  "
console.log(newStringOne.trim()) //in database i don't want any more unwanted spaces 

//as you see unwanted terms like %20 in the realtime urls
//for eg,
const url = "https://rahul.com/rahul%20sharma"
console.log(url.replace("%20", "-"))
console.log(url.includes("rahul")) //checking url strings

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[2]);
// Expected output: "brown"

const chars = str.split("");
console.log(chars[4]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


//substrings knowledge

const str12 = "Hello World";

console.log(str.substring(0,5)); 
// "Hello"  (characters from index 0 up to, but not including, 5)

console.log(str.substring(6));   
// "World"  (everything from index 6 to end)

const chars1 = "🙂a".split(""); //will fetch in like unknowns form i.e ?? space or what like this for emojis 
//cause it is not a character
console.log(chars1);



//for substring and mainly splits
let newrt = "UTF 16"
console.log(newrt.substring(2, 12))
console.log(newrt.substring(3)) //counts from the second character
console.log(newrt.split(" "))




