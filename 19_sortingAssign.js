const arrayRollNumber = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumber.reverse();
console.log("Reverse array",arrayRollNumber);
arrayRollNumber.sort();
console.log("In this sort without custome logic it will only reconise first letter  ",arrayRollNumber);

const ascendingOrder = arrayRollNumber.sort((a,b)=>{
    return a>b ? 1:-1;
})
console.log("Ascending order",ascendingOrder);
let lastDigit = ascendingOrder.pop();
console.log("last digit or gretest digit",lastDigit);
let smallestDigit = ascendingOrder.shift();
console.log("first digit or smallest number in the arrya",smallestDigit);


// const sortedArrya = [...new set (ascendingOrder)];
// console.log(sortedArrya);
 
    function removeDuplicates(arr) {
        return ascendingOrder.filter((item,
            index) => ascendingOrder.indexOf(item) === index);
    }
 
    console.log("remove element",removeDuplicates(ascendingOrder));
