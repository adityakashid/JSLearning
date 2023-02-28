function squareOfWordLength(word) {
    var result = word.length;
    console.log(`The word we pass to the ${word} : ${word.length}         And the square of the length is : ${result ** 2}`);
    console.log(`**********************************************`);
    return result;
}

var realOutput = squareOfWordLength("javascript");
squareOfWordLength("Google chrome");
squareOfWordLength("Developer smart");

// console.log(realOutput);


function assignB(){
    var first = "I am Angular developer";
    return first;
}
var tute = assignB();


var tutelength = tute.length;
console.log(`The length of the string :${tutelength}`);
console.log(`**********************************************`);

var tuteWords = tute.split(" ")
console.log(`The word in the given string : ${tuteWords.length}`);
console.log(`**********************************************`);

var tuteDivision = tute.length / tuteWords.length;
console.log(`The division of the words is : ${tuteDivision}`);
console.log(`**********************************************`);


var tuteMultiplication = tute.length * tuteWords.length;
console.log(`The Mulyiplacation of the words in given string is : ${tuteMultiplication}`);
console.log(`**********************************************`);
