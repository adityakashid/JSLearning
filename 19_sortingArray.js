const array = [5,6,3,44,104,302,15];
console.log(array);
const arrayNames = ["Elone","Rattan","Billgates","PT Usha","Murmu"];
const sortaedArray = arrayNames.sort();
console.log("This array get sorted by the assinding order of an Alphabet",sortaedArray);
const arrayNumbers = [94,1,65,0,454,65,36,21];
const jj = arrayNumbers.sort((a,b) => {
   return a>b ? 1 : -1;
})
console.log("array in assinding order ",jj);

const newArrya = [94,1,65,0,454,65,36,21];
const aa= newArrya.sort((a,b) => {
   return a>b ? -1 : 1;
})
console.log("array in assinding order ",aa);


const rr = arrayNames.sort((a,b) => {
   return a>b ? 1 : -1;
})
console.log("array in assinding order ",rr );

let myName = "GK";
// kk = JSON( )
let hh ={
    vv :"sjns"
};
hh.kk="jsdcskj";
console.log(hh);