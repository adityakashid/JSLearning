const array = [3,4,5,6,1];
let ff = [];
array.forEach(element => {
        let gg = element + 2;
        ff.push(gg)
});
console.log(ff);
console.log(`**********************`);


array.forEach((element, index , array) => {
    console.log(element, index , array);
});
console.log(`**********************`);
//("using map ()")method
const arrayNew = array.map((element) =>{
    return element+2; 
});
console.log(arrayNew);
console.log(`**********************`);

const arrayOfNames = ["Rupesh Dhumal","Ruruja Pawar","Nayan","Pralhad"];

const arrayNameTransformed = arrayOfNames.map(element => element.length );
console.log(arrayNameTransformed);
console.log(`**********************`);
arrayOfNames.forEach(element => {
    let gg = element.length;
    console.log("sQuare root of the element",gg," is ",gg * gg);   
}
);
