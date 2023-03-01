
// function greterNumber(num1 , num2) {
    
//     var result = num1 > num2 ? num1 : num2;
//     console.log("The greter valu is : ",result);
// }

// greterNumber(10 , -10);
// greterNumber(800 , 899);



// function isEvenOrOddNum( num4){
//     console.log(num4 %2 ==0);
//     var result1 = num4 %2 ==0 ? "even" : "odd";
//     console.log(` The number is ${num4} and it is ${result1}`);
// }
// isEvenOrOddNum(29);
// isEvenOrOddNum(44);
// isEvenOrOddNum(0);
// isEvenOrOddNum(101);


function wordLength(word){
    var result3 = word.length;
    var tuteResult = result3 %2 == 0 ? "even": "odd";
    console.log(`The word ${word} length is ${result3} It is ${tuteResult}`);
}

wordLength("javascript");
wordLength("Developer");
wordLength("Google");



console.log("*************************************************");

function maleMarriageEligbility(gender ,age , boyName) {
    var result = gender == "male" && age >= 21 ? `Hey${boyName} you are eligible for marragge`:`Hey ${boyName} you are not eligable for the marrage`;
    return result ; 
    
}
var tute1 = maleMarriageEligbility("male", 25 , " Billgates");
console.log(tute1);
//we have too wright like this "Male"
console.log(`${maleMarriageEligbility("male" , 17 ,"Stew JObs")}`);

console.log("****************************************");

function femailMarrageEligibility(gender , age , girlName) {
    var girlResult = gender == "female" && age >=18 ? `Hey ${girlName} you are elibile for the marrage`: `Hey ${girlName} you are not eligile for the marrage`;
    return girlResult;
}

var tuteGirl = femailMarrageEligibility("Femail",16,"jenifer");
console.log(tuteGirl);
console.log(`${femailMarrageEligibility("femail",27,"Malinda Gates")}`);




console.log("**************************ASSIGNMENT NUMBER 03**************************");




// function tcsEligibilitEntrance(gradScore, hscScore , sscScore , candidateName) {
    
//     var resultt = gradScore >= 70 || hscScore >=80 || sscScore = 90 ? `congrulation ${candidateName} you are eligible for the TCS interview ` : `Sorry ${candidateName} unfortunately you are not eligible for the interview`;
//      console.log(resultt);
// }
// tcsEligibilitEntrance(80,86,90,"Aditya kashid");


function tuteTcs(gradScore, hscScore , sscScore , candidateName) {
    var result21 = gradScore >= 70 || hscScore >= 80 || sscScore > 90 ? `congrulation ${candidateName} you are eligible for the TCS interview `: `sorry ${ candidateName} Unfortunatly you are not eligible for interview `;
    console.log(result21);
}

tuteTcs(80,86,90,"aditya");
tuteTcs(60,76,55,"yash");
tuteTcs(70,65,55,"mukul");