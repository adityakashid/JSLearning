

var reverseStr = function (arg1) {
    var char = "";
    var count = 0;
    for (let index = 0; index < arg1.length; index++) { 
         var fab = arg1.charAt(index);
         char = char+ fab;
         if (fab == " ") {
            count = count + 1; 
         }
    }
    console.log(char);
    console.log(count);
}
reverseStr("Javascript is the below given string")

var reverseStr = function (arg1) {
    var char = "";
    var count = 0;
    for (let index = 0; index < arg1.length; index++) { 
         var fab = arg1.charAt(index);
         char = char+ fab;
         if (fab == "a" || fab == "e" || fab == "i" || fab == "o" || fab == "u" || fab == "A" || fab == "E" || fab == "I" || fab == "O" || fab == "U" ) {
            count = count + 1; 
         }
         
    }
    console.log(`the given string is : - ${char}`);
    console.log(`*****************************`);
    console.log(`The vowles the string :- ${count}`);
}
reverseStr("Javascript is the below given string");
reverseStr("I am Angular Developer");
reverseStr("Hard work and commitment is the key of success");

console.log(`*****************************`);

function lastWordCharsCount(arg2) {
    var char ="";
    var count =0;
    for (let index = arg2.length -1 ; index >= 0; index--) {
        var str = arg2.charAt(index);
        if (str == " ") {
            break
        }
        char = char + str; 
        if (str =" " ) {
            count = count + 1
        }
        
        
    }
    console.log(char);
    console.log(count);
}
lastWordCharsCount("Javascript is the below given string");

// reverseStr("I am Angular Developer");
// reverseStr("Hard work and commitment is the key of success");