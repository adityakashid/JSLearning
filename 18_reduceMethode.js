const array = [3,4,5,8,90,50,1,44,78,51];

let gg = array.reduce((runningTotal , value )=>
{
    console.log(runningTotal ,value);
    // return value + runningTotal;   
});
// console.log(gg);


//find out the even number and sum it
const ff = array.filter ((Element) => {
 
 return Element% 2 == 0;
});
console.log(ff);
let oo = ff.reduce((runningelement , value) => {
    return runningelement + value;
});
console.log(oo);

//find out  the number which is multiple of 3 from the given array
const arrayNum = [3,4,12,8,90,50,1,15,78,21];
let dd = arrayNum.filter((Element )=>{
    // console.log(Element , index , array);
    return Element % 3 ==0;
}).reduce((totalSum , value)=>{
return totalSum + value
});
console.log(dd);