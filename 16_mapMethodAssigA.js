const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

const newArray = arrayNumbers.map(element => element + 10);
console.log("add 10 in each and every element ",newArray);

const squareRootArray = arrayNumbers.map(element => element * element);
console.log("Square root of the element ",squareRootArray);


const indexArray = arrayNumbers.map((element, index) => element + index);
console.log("Adding there index value to the given element ",indexArray);
