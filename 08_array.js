let arrayName = [1,2,0,3,4,5,6,7,8,9];
console.log(arrayName);
console.table(arrayName);
var totalNumberOfElement = arrayName.length;
console.log("Total number of Element present in the array",totalNumberOfElement);

var arrayOfNumber = [10,20,30,40,50,60,80];

const valueOfTheIndex = arrayOfNumber.includes(40);
console.log(valueOfTheIndex);

const indexOfElement40 = arrayOfNumber.indexOf(40);
console.log(indexOfElement40);

const indexOfElement100 = arrayOfNumber.indexOf(100);
console.log("It will return -1 coz this value is not present in the array",indexOfElement100);

var arrayOfDigits = [10,20,15,25,30,40,45,35,50];

const valueOfIndex5 = arrayOfDigits[5];
console.log("It will gave the value at index 5 is present",valueOfIndex5);
console.log(`**********************`);
arrayOfDigits[5] = 400;
console.log("Here I update the value form 40 to 400 ",arrayOfDigits);
console.log(`**********************`);
arrayOfDigits[0] = 1000;
console.log(arrayOfDigits);

// let arrayOfNumbers = [0, 2, 4, 5, 8, 4, 0, 8]
// console.log(arrayOfNumbers)
// console.table(arrayOfNumbers)
// const totalArrayElements = arrayOfNumbers.length
// console.log(`Total elements available in array is: ${totalArrayElements}`)
// const is8Available = arrayOfNumbers.includes(8)
// console.log(`Is 8 available: ${is8Available} `)
// const is9Available = arrayOfNumbers.includes(9)
// console.log(`Is 9 available: ${is9Available} `)
// const indexOf8 = arrayOfNumbers.indexOf(8);
// console.log(`Index of 8 element is: ${indexOf8}`);
// const indexOf100 = arrayOfNumbers.indexOf(100);
// console.log(`Index of 100 element is: ${indexOf100}`);

var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumbers[2]; 
console.log(`Value at index 2 is: ${valueAtIndex2}`); 
arrayOfNumbers[3] = 35; 
console.log(arrayOfNumbers);
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5]; 
console.log("==== Adding element in the last using push() === "); 
arrayOfNumbers.push(40); 
console.log(arrayOfNumbers); 
console.log("==== Adding element in the first using unshift() === "); 
arrayOfNumbers.unshift(5); 
console.log(arrayOfNumbers);
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5]; 
console.log(arrayOfNumbers); 
console.log("==== Removing last element using pop() === "); 
arrayOfNumbers.pop(); 
console.log(arrayOfNumbers); 
console.log("==== Removing first element using shift() === "); 
arrayOfNumbers.shift(); 
console.log(arrayOfNumbers);
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45]; 
console.log("==== slice(startIndex) === "); 
const arrayFromIndex3 = arrayOfNumbers.slice(3); 
console.log(arrayFromIndex3); 
console.log("==== slice(startIndex, endIndex) === "); 
const subArray = arrayOfNumbers.slice(2, 5); 
console.log(subArray);
console.log(`************************************`);
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45]; 
const removeElement20 = arrayOfNumbers.splice(1,1);
console.log(removeElement20);
console.log(arrayOfNumbers);
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45]; 
const removeElement25 = arrayOfNumbers.splice(1,2);
console.log(removeElement25);
console.log(arrayOfNumbers);
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45]; 
arrayOfNumbers.splice(3,1); 
console.log(`After removing 15: ${arrayOfNumbers}`); 
console.log("=====splice() to insert one elements without replacing existing element ===================="); 
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45]; 
arrayOfNumbers.splice( 2, 0, 22); 
console.log(arrayOfNumbers); 
console.log("=====splice() to insert one elements without replacing existing element ===================="); 
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
 // 5, 35, 55 
 arrayOfNumbers.splice( 4, 0, 5, 35, 55); 
console.log(arrayOfNumbers);

console.log("===== Traversing ====================");
 var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ]; 
 let sum = 0;
//    10
for (let index = 0; index < arrayOfNumbers.length; index++) 
  { const element = arrayOfNumbers[index];
    sum = sum + element;
    sum = 0 + 20 
    console.log(element);
 }
  console.log(`Sum of an Array element is: ${sum}`);