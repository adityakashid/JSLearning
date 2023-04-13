const arrayNunber =[1,-7,40,502,-77,91,0,108,89,-601];
 arrayNunber.forEach((element , index) => {
    console.log(` ELEMENT OF THE ARRAYNUMBER :-${element} AND THE INDEX VALUE OF THE NUMBER ${index}`);
});

arrayNunber.forEach(element => {
    if (element >= 0) {
        console.log(element);
    }
});
let gg =[]
arrayNunber.forEach(element => {
    if ( element <= 0) {
       gg.push(element)
    }
});
console.log(gg);

arrayNunber.forEach(element => {
    if (element %2 == 0) {
        console.log(`even numbers fron the given array ${element}`);
    }
});
var sum = 0;
arrayNunber.forEach(element => {
    sum = sum + element
});
console.log("The sum of all the numbers which are present in he arrya ",sum);

arrayNunber.forEach((element , index) => {
    if (index == 0 || index % 2 == 0) {
        console.log("THE element on the even index ",element);
    }
});