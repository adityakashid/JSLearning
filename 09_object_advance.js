const employee = {
    Id: 1345698,
    name : "Elon Musk",
    country: "US",
    city : "silicon valley"
}
const array = [];
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key ,element);
        array.push(key);

    }
}
console.log(`************************`);
//this will return all the key which is present in the given object employee
const keyofemployee = Object.keys(employee)
console.log(keyofemployee);
console.log(`************************`);
//This will return all the value which is present in the object employe
const valuesOfEmploye = Object.values(employee);
console.log(valuesOfEmploye);
console.log(`******************`);
//in this entries key words form information about or convert key : value pairs into the elements
//and convert it into an array
const entriesOfEmployes = Object.entries(employee); 
console.log(entriesOfEmployes);
console.log(entriesOfEmployes[0,0]);
console.log(`************************`);
//in operator
const isIdAvailable = "name" in employee;
console.log(isIdAvailable);



const player = {
    fullName: "Virat Kohli",
    totalCenturies : 46, 
    isMarries: true 
}
Object.freeze(player); 
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed 
delete player.totalCenturies;// deleting property - Not allowed as object is freezed 
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed 
console.table(player);

const student ={
    firstName : "Elon",
    lastName : "musk",
    age : 23
}
const address = {
    country : "US",
    city :"Silicon valley",
    PIN : "QA2345",
}
Object.freeze(address);
const newObject ={};
Object.assign(newObject,student,address);
console.log(newObject);
// console.log(this.yesbank.show);