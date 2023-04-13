//ARROW FUNCTION WITH NO ARGUMENT AND NO RETURN VALUE
let show = ()=>{
   console.log(`Arrow function`);
};  
show();

//Arrow function with arguments and no return value
let add = (num1 ,num2 ) => {
    console.log(num1+num2);
};
add(10,20);

//Arrow Function with ARGUMENT AND RETURN VALUE
//Arrow function with arguments and no return value
let multiply =(num1,num2) => {
    const result = (num1*num2);
    return result;
};
let ff = multiply(10,20);
console.log(ff);