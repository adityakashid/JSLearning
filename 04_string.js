var greet ="Good Morning";
console.log(typeof greet);

console.log("Total number char available into this string variable - greet ");
var greetLength = greet.length;
console.log(greetLength);

console.log("Find the character by the index value ");

var charAtIndex = greet.charAt(3);
console.log("The character avaible at index 3 is :",charAtIndex);

console.log("Find the last character ");
var charAtLastIndex = greet.charAt(greetLength -1);
console.log("Last char is : ",charAtLastIndex);

console.log("Find the index by character value ");
var indexOfM = greet.indexOf("M");
console.log("Index of the char M : ",indexOfM );


console.log(" Index of char which is not available into the string :", greet.indexOf("z"));

console.log("Index of the char :",greet.indexOf("o"));
console.log("Index of a char using lastIndexOf()", greet.lastIndexOf("o"));


var replaceResult = greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("UPPER CASE",replaceResult.toUpperCase());
console.log("lower case",replaceResult.toLowerCase());

var myName = "    Aditya Kashid  ";
var myNmaeAfterTrime = myName.trim();
console.log(myName,myNmaeAfterTrime,myName.length ,myNmaeAfterTrime.length);

var count = myName.length - myNmaeAfterTrime.length;
console.log(count);

//This is the another method 

//console.log("The ans is :  ",myName.length - myNmaeAfterTrime.length );

console.log(myName.trimStart , myName.trimEnd);

console.log("include()");

console.log("Is substring mor include in the variable greet or not :", greet.includes("Mor"));
console.log("Is substring mor include in the variable greet or not :", greet.includes("Evening"));

console.log("slice() Method");
var sliceResult = greet.slice(5,12);
console.log(sliceResult);

console.log(greet.slice(2,5).length);

console.log("splite the string");
var greet ="Good Morning";
var splitResult = greet.split(" ");
console.log( splitResult.length);

console.log("****************");
var myFrndList = "Billgates , Stew job , Elon Musk ,Ratan Tata, Sudha Pichai , Satya Nadella , Narayan Murti , Nandan Nilekani , Larry Page, Surgey Brain , Tim Cook ";
var toatlFrnd = myFrndList.split(",");
console.log(toatlFrnd);
console.log(toatlFrnd.length);

var numberOfWords = myFrndList.split(" ");
console.log(numberOfWords.length);
