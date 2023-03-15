console.log(``);
console.log(`****************ASSIGNMENT NUMBER 01****************`);
console.log(``);

function voteEligibility(age) {

    if (age <= 0 || age >= 120) {
      return `Your age ${age} is not valid `;
    }
    if (age == null || age == undefined) {
      return`your age ${age} is not define `;
    }
  
    if (age >= 18) {
      return `you are age ${age} is eligible for voting`;
    } else {
      return `you are age ${age} is not eligible for the voting`;
    }
  }
  
  var result = voteEligibility(45);
  console.log(result);
  var result = voteEligibility(17);
  console.log(result);
  var result = voteEligibility(8);
  console.log(result);
  var result = voteEligibility(20);
  console.log(result);
  var result = voteEligibility(-10);
  console.log(result);
  var result = voteEligibility(200);
  console.log(result);
  var result = voteEligibility(0);
  console.log(result);
  var result = voteEligibility(undefined);
  console.log(result);
  var result = voteEligibility(null);
  console.log(result);
  
  
  console.log(``);
  console.log(`****************ASSIGNMENT NUMBER 02****************`);
  console.log(``);

  
function gradeCalculation(marks) {
  if (marks <= 0 || marks >= 100 || typeof marks != "number") {
    return `Please provide a valid number ${marks} `;
  }
 
  
  if (isNaN(marks) || marks == null) {
    return `${marks} This is not a approprate data }`;
  }

  if (marks >= 90) {
    return`FUNTASTIC MARKS ${marks} your grade is A++`;
  }
  if (marks >= 75) {
    return `EXCELENT MARKS ${marks} your grade is A`;
  }
  if (marks >= 50) {
    return `good marks ${marks} your grade is B `;
  }
  if (marks >= 35) {
    return `your grade ${marks} is C NEED IMPROVEMENT`;
  }
  if (marks >= 0) {
    return`You are not pass ${marks}`
    
  }
}

var result = gradeCalculation(98);
console.log(result);
var result = gradeCalculation(80);
console.log(result);
var result = gradeCalculation(90);
console.log(result);
var result = gradeCalculation(0);
console.log(result);
var result = gradeCalculation(150);
console.log(result);
var result = gradeCalculation(-7);
console.log(result);
var result = gradeCalculation(35);
console.log(result);
var result = gradeCalculation(29);
console.log(result);
var result = gradeCalculation(64);
console.log(result);
var result = gradeCalculation(49);
console.log(result);
var result = gradeCalculation("91");
console.log(result);
var result = gradeCalculation("Eight");
console.log(result);
var result = gradeCalculation(NaN);
console.log(result);
var result = gradeCalculation(null);
console.log(result);
