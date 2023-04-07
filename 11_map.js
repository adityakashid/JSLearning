function print() {
    console.log(`=============================================`);
}
const mapOfNUmber = new Map();
mapOfNUmber.set("one",1);
mapOfNUmber.set("two",2);
mapOfNUmber.set("three",3);
mapOfNUmber.set("four",4);
mapOfNUmber.set("one",1);
mapOfNUmber.set("one",55);
mapOfNUmber.set("five",1);
console.log(mapOfNUmber);
console.log(mapOfNUmber.size);
console.table(mapOfNUmber);

// mapOfNUmber.delete("two");
// console.table(mapOfNUmber);
mapOfNUmber.has("two");
console.table(mapOfNUmber);
print();
// mapOfNUmber.clear()
//to travers a set
console.log(`TO TRAVERS A SET`);
for (const element of mapOfNUmber) {
    console.log(element);
};
const valueOfMaoFnUMBER = mapOfNUmber.values();
console.log(valueOfMaoFnUMBER);

const keyOfMaoFnUMBER = mapOfNUmber.keys();
console.log(keyOfMaoFnUMBER);
// console.log(keysOfMap); 
for (const keys of keyOfMaoFnUMBER) {
    console.log(keys,mapOfNUmber.get(keys));
} 
