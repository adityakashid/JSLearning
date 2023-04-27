const arrayNumber =[20,11,40,25,37,49,9,90,60,2,19];

const hh = arrayNumber.filter((value)=>{
    return value >= 50
})
console.log("number greater than 50 :- ",hh);

const tt = arrayNumber.filter((value)=>{
    return value % 2 == 0;
})
console.log("even numbers ",tt);

const yy = arrayNumber.filter((value)=>{
    return value % 2 == 1;
})
console.log("odd numbers",yy);

const uu = arrayNumber.filter((value)=>{
    return value % 5 == 0;
})
console.log("number which is multiple of 5 :- ",uu);

const ii = arrayNumber.filter((value)=>{
    if (value >= 20 && value<=50) {
        return value; 
    }
})
console.log("value in between 20 to 50 :-",ii);