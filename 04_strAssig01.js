console.log("***************Question no 01 **************");

function stringBascics() {
    console.log("My dream companyis : GOOGLE ");
}


console.log("***************Question no 02 **************");

var sport1 ="Football";
var sport2 ="Table tennis";
var sport3 ="traveling";

console.log("Length of the first character : ", sport1.length, "Length of the second character :",sport2.length ,"Length of the third character :",sport3.length);  
var sportResult = sport1 + sport2 + sport3;
console.log("Sum of the toatal characters : ",sportResult.length);



console.log("***************Assignment no 02 **************");



function stringHandsOn() {
    

}

console.log("");


var  aditya ="     Hey you are doing good keep it up       ";

console.log(aditya);

    var strLength = aditya.length;
    console.log("01 Toatal length :",strLength);

    var adityaTream = aditya.trim(" ");
    console.log("After treaming extra spaces :",adityaTream.length);

    var extraSpace = aditya.length - adityaTream.length;
    console.log(extraSpace);


    var charAtIndex = adityaTream.charAt(0);
    console.log("first later of the string : ", charAtIndex );

    var charAtIndexLast = adityaTream.charAt(adityaTream.length -1);
    console.log("Last latter of the string : ", charAtIndexLast );

    var splitAditya = adityaTream.split(" ")
    console.log(splitAditya.length);

    var adityaTreamIndexOf = adityaTream.indexOf("good");
    console.log(adityaTreamIndexOf);

    console.log("Printing the sub string by method of substring() : :",adityaTream.substring(22));
    console.log("substring starting form the index 22by using slice() : ",adityaTream.slice(22));

    console.log("checking if the string is ends with the word up aur not ", adityaTream.includes("up"));
    console.log("cheching is strig start with word hey aur not : ", adityaTream.includes("Hey"));

    console.log("Final length of the string is ",adityaTream.length);
