function fabonici(params) {
    let first = 1;
    let second = 0;
    let next = 0;
for (let index = 1; index <= params ; index++) {
    console.log(first);
next = first + second;
first = second;
second =next;  
}
}
fabonici(9);


// function numberss(params) {

    // for (let index = 0; index <= params; index++) {
    //     if (params%2==1) {
    //         console.log(params);
    //     }
    //     const element = params %2 == 1;
    //     console.log(element);
        
    // }
// }
// numberss(10);

// function ss(hh) {
//     let a = 0 , b = 1 ;
// for (let index = 0; index <= hh; index++) {
//     let temp = a + b;
//     console.log(temp);
//     a=b;
//     b=temp;

//     for (const iterator of object) {
        
//     }
// };
// };

// ss(11)


// var ss = 123;

function reverse(ss) {

    let reverseString = ss.toString().split("").reverse().join("");
    let valueWhichIsComming = ss.toString();
if (valueWhichIsComming === reverseString) {
    console.log(`IT IS A PALANDROME `);
}else{
    console.log(`IT IS NOT A PALANDROME `);
}
console.log(reverseString);
}

reverse("HUH");