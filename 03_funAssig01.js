console.log("********* QUESTION  01**********");

function firstFirst(){
    console.log("The first ");
}
firstFirst();

function firstSecond() {
    console.log("The second ");
}
firstSecond();





console.log("************* QUESTIION 02 ***********");

function personalDetails(firstName , lastName , collegeName) {
    console.log("The second question");
    
}
personalDetails();






console.log("**************** QUESTION 03 ***************");

var num1 = 1000;
var num2 = 2000;

function swapValueDude(valu1 , valu2) {
    console.log("The value before swapping is :", valu1 , valu2);

    var temp = valu1;
    valu1 = valu2;
    valu2 = temp;

    console.log("The value after the swapping :", valu1 , valu2);
}
swapValueDude(num1, num2);

swapValueDude("virat", "Anuksha"); // 





console.log("************ QUESTION 04 *************");


function addThreeValues(num1 , num2 , num3){
var adding = num1+num2+num3;
return adding;


}


var result1 = addThreeValues(10.23,600,40);
console.log("The output ofthe given addition is : ",result1);

var resunt2 = addThreeValues("Hello" , "Good" , "Morning");
console.log("The product of the given output : ", resunt2);


