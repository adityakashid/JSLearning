var num1 = "100";
var num2 = "200";

var name1 ="Aditya";
var name2 ="Awantika";

var str1 = "Sweety";
var str2 = "Cutey";
 


function swapVariable(value1,value2){
    console.log("Before Swapping",value1,value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After swapping the variable : ", value1,value2);

 }
 swapVariable(num1,num2); //function call or function invoke


//  new one
// Function with no aurguments and no return value

 function showFullName() {
    console.log("My full name is : Aditya Kashid");
}
 showFullName();

//  Function with arguments and no return value;
function showAge(age){
    console.log("My age is : ", age);
}
showAge(23);

// Function with no agruments and return value;

function fullNamee(params) {
    var name = "Aditya Kashid";
    return name;
}

 var fName = fullNamee();
 console.log(fName);

 // function with argument and return value;


 function sumOfNumber(num1 , num2 , num3){
    var sum = num1+ num2+ num3;
    return sum;
 }

 var add = sumOfNumber(100 , 55 , 66);

console.log("Addition of the numbers are : ",add);






