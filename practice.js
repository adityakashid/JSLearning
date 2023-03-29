// const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
// const evenNumbers = [];

// for (let index = 0; index < arrayNumbers.length; index++) {
//   if (arrayNumbers[index] % 2 === 0) {
//     evenNumbers.push(arrayNumbers[index]);
//   }
// }

// console.log("Even numbers in the array: ", evenNumbers);

const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let evenSum = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 2 === 0) { // check if the number is even
    evenSum += arrayNumbers[i]; // add the even number to the sum
  }
}

console.log("The sum of even numbers in the array is: " + evenSum);