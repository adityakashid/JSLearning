var reverseString = function(str) {
    var reverse = "";

    for (let index = str.length-1; index >= 0 ; index--) {
        var char = str.charAt(index);
        // console.log(charAT);
        reverse = reverse + char;
    }
    return reverse;
    // console.log(reverse);
}
var result  = reverseString("All the best");
console.log(result);
// }

var reverseStr = function(str){
    var reverse ="";
    for (let index = str.length-1; index >= 0; index--) {
        var char = str.charAt(index);
        if (char == " ") {
            break;
        }
        reverse = reverse + char;
    }
    return reverse;
}
var result = reverseStr("MY NAME IS ADITYA ");
console.log(result);

var str = "Aditya is a student";
var result ="";

for (let index = 0; index <= str.length; index++) {
    var char = str.charAt(index);
    result = result + char;
}
console.log(result);
    
console.log(`************** 2 TYPE OF METHOD TO SOLVE*****************`);

var str = "I am Angular  champ";

var new1 ="";

for(let index = 0; index <= str.length-1; index++){

    var chr=str.charAt(index);

    new1 = new1 +chr;

}

console.log(new1);