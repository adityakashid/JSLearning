const setOfNums = new Set();
setOfNums.add(2);
setOfNums.add(5);
setOfNums.add(8);
setOfNums.add(2);
setOfNums.add(3);
setOfNums.add(5);
console.log(setOfNums);
console.log(setOfNums.size);

setOfNums.delete(2);
console.log(setOfNums);

setOfNums.clear();
console.log(setOfNums);

const array = [1,2,3,4,5,6,4,1,2,5,7,8,9,5,20];
const setOfElement = new Set();
for (const element of array) {
    setOfElement.add(element);
}
console.table(setOfElement);


const newSetOfElement = new Set(array);
console.log(newSetOfElement);

const newSetarray = [...new Set(array)];
console.log(newSetarray);