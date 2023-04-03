const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]; 

console.table(arrayNumbers);
console.log(`Question number 01`);
let lengthOfArray = arrayNumbers.length;
console.log("Total number of length present in the array :- ",lengthOfArray);

console.log(`Question number 02`);
let firstOne = arrayNumbers.shift();
let lastOne = arrayNumbers.pop();
console.log(`The first word from the array is : -${firstOne}`);
console.log(`The last word from the arrya is :- ${lastOne}`);

//Question number 03
const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11]; 
let lastElementOfArray = arrayNumber[arrayNumber.length-3];
console.log(`last third element of array using length property is :- ${lastElementOfArray}`);

//Question number 04 &05 find the EVEN & ODD number 
let evenNumber = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (element%2 == 0 ) {
        evenNumber = element;
        console.log("the even number ",element);
}
}
console.log(`************`);
let oddNumber =0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (element%2 == 1 ) {
        oddNumber = element;
        console.log("the OOd number ",oddNumber);
}
}

// Question number 6 & 7 the sum of the even & odd number from the given arry

console.log(`*************EVEN NUMBER SUM ************`);

let sumEvenNumber = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    if (index%2 == 0) {
        element = arrayNumber[index];
    console.log("the value on even index :=",element);
     sumEvenNumber = sumEvenNumber + element;
    }
}
console.log(`The sum of an even number :- ${sumEvenNumber}`);


console.log(`**********ODD NNUMBER SUM ************`);
let oddNumberSum =0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (element%2 == 1 ) {
        oddNumberSum = oddNumberSum + element;
        console.log("the OOd number:-  ",oddNumberSum);
}
}

console.log(`***************** SUM OF ALL ELEMENTS ****************`);
let sum =0;

for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    sum = sum + element;
    console.log(sum);    
}

console.log(`***************** find the number which is multiple of 5 ****************`);
let multiple = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (element%5 == 0) {
        multiple = element;
        console.log(`These are the multiple of 5 present in the given array ${multiple}`);
    }
}
console.log(`************find the 115 number is present in the given arrya************`);
if (arrayNumber.includes(115)) {
    console.log(`yes it is present `);
}
else{
    console.log(`No it is not present in th given array`);
}

console.log(`************find the 23 number is present in the given arrya************`);
if (arrayNumber.includes(23)) {
    console.log(`yes it is present `);
}
else{
    console.log(`No it is not present in th given array`);
}

console.log(`Insert numbers 55,66 at the given array at index 3 `);
arrayNumber.splice(3,0,55,66);
console.log(arrayNumber);
console.log(`Delete 3 elements stating from index 4  `);
arrayNumber.splice(4,3);
console.log(arrayNumber);