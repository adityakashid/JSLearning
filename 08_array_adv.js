const arrayOfName = ["anil","sunil","bill","elon"];
const result = arrayOfName.join(":");
console.log(result);

console.log(arrayOfName.length);
console.log("Resize an array");


arrayOfName.length =3;
console.log(arrayOfName.length);
console.log(arrayOfName);

arrayOfName.length =7;
console.table(arrayOfName);

const hh =[2,5,48,9,2,5,7,5,8,9,1 ];
const jj = new Set();
for (const iterator of hh) {
    jj.add(iterator);
}
console.table(jj);