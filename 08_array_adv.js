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