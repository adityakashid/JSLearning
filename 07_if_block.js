console.log(`start`);
var num = -10;

if (num > 0) {
  console.log(`inside if `);
  console.log(`Number is positive ${num}`);
}
console.log(`End`);

var ageOfVote = 110;
if (ageOfVote >= 18) {
  console.log(`you are eligible for voting`);
  console.log(`Age is : ${ageOfVote}`);
}

console.log(`End of next if block`);

console.log(`**********************************`);

function chechEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "EVEN";
  }
  if (num % 2 == 1) {
    return "ODD";
  }
}
var result = chechEvenOrOdd(45);
console.log(`The output is the : ${result}`);
var result = chechEvenOrOdd(70);
console.log(`The output is the : ${result}`);
var result = chechEvenOrOdd(67);
console.log(`The output is the : ${result}`);
var result = chechEvenOrOdd(98);
console.log(`The output is the : ${result}`);

console.log(`***************************************`);
// the eligible age is 20
function eligibleForVote(num) {
  if (num >= 20) {
    console.log(`You are eligible for the voteing process ${num}`);
  }
  if (num < 20) {
    console.log(`You are not eligible for voteing process ${num}`);
  }
}

eligibleForVote(18);
eligibleForVote(20);
eligibleForVote(17);
eligibleForVote(40);


console.log(`***************************************`);
//IN THIS WE DISCUESS WETHER THE THIS STRING HAS LETTERS ABOVE THAN THE 10 WORDS OR NOT  
var aditya = "javaScript-ES6";

function stringLength(argu) {
  var thisislen = argu.length;
  console.log(`the length of the string is ${thisislen} `);

  if (aditya.length > 10) {
    return "This string has more than 10 char";
  }
  return "This string has less char than 10";
}
var result = stringLength(aditya);
console.log(result);

console.log(`***************************************`);

function stringCheck(agr1) {
  //this line only tell us wether the word java is present or not
  console.log(agr1.includes("java"));

  if (agr1.includes("java") == true) {
    return "yes";
  }
  return "NO";
}
var result = stringCheck(aditya);
console.log(result);


console.log(`*****************************ASSIGNMENT 01 IS DONE ******************************`);