const array = [2, 3, 4, 5, 9]; 
array.forEach( function( currentValue, index, array ) { 
    console.log(currentValue, index, array); 
}); 
console.log(`****************`);

array.forEach( ( currentValue ) => { 
    console.log(currentValue); 
});
console.log(`****************`);
//forEach loop to find even number
array.forEach(element => {
    if (element%2==0) {
        console.log(element);
    }
});
console.log(`****************`);

// sum of the ARRAY

let sum =0;
array.forEach(element => {
    sum = sum + element;
});
console.log(sum);
console.log(`****************`);

//find even index in the given arrya

array.forEach((element , index)=> {
    if (index % 2 ==0) {
        console.log(element);
    }
});

















// let show=(element)=>{
//     console.log(`bsjdh`);
// }
// show()
// let display = (ss) => {
//     console.log(ss*10);
// }
// display(10);