console.log(`QUESTION NUMBER NO  01 `);
const arraySeasonalFruits = ["Banana" ,"Orange" ,"Apple" ,"Mango" ,"Water Melon"];
let firstElement = arraySeasonalFruits[0];
// let lastElement = [];
let lastElementName =arraySeasonalFruits[arraySeasonalFruits.length-1]; //in bracket we tell the position of an last element
console.log(`first Element ${firstElement}`);
console.log(`the last element is ${lastElementName}`);

console.log("******************************");
console.log(`QUESTION NUMBER NO  02 `);
console.log(`WE DONE IT HELP OF SPLICE `);
arraySeasonalFruits.splice(0,0,"Pappya",);
console.log(arraySeasonalFruits);

// console.log(`QUESTION NUMBER NO  02 `);
// console.log(`WE DONE IT HELP OF unshift `);
// arraySeasonalFruits.unshift("Cherry",);
// console.table(arraySeasonalFruits);

console.log("******************************");

console.log(`QUESTION NUMBER NO  03`);
console.log(`WE HAVE TO REMOVE WORD MANGO FROM THE GIVEN ARRAY `);
var indexOFMango = arraySeasonalFruits.indexOf("Mango");
arraySeasonalFruits.splice(4,1);//HERE WE DELEAT THE INDEX WERE THE MANGO IS LOCATED
console.log(indexOFMango);//FIRST WE FIND WHAT IS THE INDEX OF THE MANGO IN GIVEN ARRAY
console.log(arraySeasonalFruits);//WE REPRINT THE ARRAY 

console.log("******************************");
console.log(`QUESTION NUMBER NO  04`);
console.log(`WE HAVE TO ADD ELEMENT PINEAPPLE IN THE GIVEN ARRAY `);
arraySeasonalFruits.push("Pineapple");
console.log(arraySeasonalFruits);

console.log("******************************");
console.log(`QUESTION NUMBER NO  05`);
console.log(`WE HAVE TO ADD ELEMENT "DRAGON FRUIT" BEFORE "WATER MELON" IN THE GIVEN ARRAY `);
var indexOfWaterMelon = arraySeasonalFruits.indexOf("Water Melon");
console.log(indexOfWaterMelon);
arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruits);

console.log("******************************");
console.log(`QUESTION NUMBER NO  06`);
console.log(`WE HAVE TO REPLACE 'ORANGE' WITH "KIWI" `);
let indexOfOrange = arraySeasonalFruits.indexOf("Orange");
console.log(indexOfOrange);
let replaceOrange = arraySeasonalFruits.splice(2,1,"Kiwi");
console.log(replaceOrange);//THIS SHOEW WHAT WE REPLACE FRON THE ARRAY
console.table(arraySeasonalFruits);

console.log("******************************");
console.log(`QUESTION NUMBER NO  07`);
console.log(`WE HAVE TO LOG THE ELEMENT FROM 1 TO 4 FROM GIVEN STRING " `);
var indeFrom = arraySeasonalFruits.slice(1,5);
console.log(indeFrom);

console.log("******************************");
console.log(`QUESTION NUMBER NO  08`);
console.log(`WE HAVE TO LOG LAST THREE ELEMENT FROM THE GIVEN ARRAY WITH THE LENGHT PROPERTY" `);
let lastThreeElement = arraySeasonalFruits.slice(-3);
console.log(lastThreeElement);