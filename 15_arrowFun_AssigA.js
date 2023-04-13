// let arrow =  () =>{
// console.log(`GOOD MORNING , Today is monday`);
// };
// arrow();
// let arrow =  (num1, num2,num3=1) =>{
//     console.log(num1*num2*num3);
//     };
//     arrow(5,5,2);
    // arrow(10,4);


    let arrow =  (num1, num2,num3,num4,num5) =>{
        let result = num1+num2+num3+num4+num5
        return result;
        };
    let gg = arrow(100,100,200,349,756);
    console.log(`THIS IS THE RESULT OF ADDITION OF TWO NUMBERS${gg}`);
    let hh = arrow("i am"," learning"," ES6"," feature"," in depth");
    console.log(hh);