//object literals
let student = {
    firstName : "Aditya",
    lastName : "Kashid",
    isWorking : true,
    age : 22 ,
    collegeName : "ABC",
    id : 20190000141 ,
    address :{
        street :"Wakad",
        city : "Pune",
        PIN : 442001
    },
    school : "podar school",
    friends :["Bill", "stew", "Elon"],//adding array in the object 
    show : function (params) {
        console.log(`i am show () function `);
    },
    addressDetails :function () {
        return `street:-${this.address.street} ,city:-${this.address.city}, PIN:-${this.address.PIN}`
    }
};
let returnAddress = student.addressDetails();
console.log(returnAddress);

console.log(student);
console.log(typeof student);
//.Dot notation
console.log(student.firstName);
//  [] Notation
console.log(student["lastName"]); 


//Update the property  
student.collegeName = ("Coep Pune");
console.log(student);
console.log(student.age );

//add new property city  == "Mumbai"
student.city = "Mumbai"
student.Countya = "India"
delete student.isWorking;
console.log(student);
console.table(student);  

let teacher = {
    firstName : "Mohit",
}
console.log(teacher);
console.log(typeof student.id);


console.log();
console.log(`*****************************************`);
console.log();

console.log(student.address.city);

console.log(typeof student.address);
student.address.PIN = 445666;
console.table  (student);

student.marks ={
    Math : 80,
    Physics : 90,
    Drawing : 49,
},
console.log(student.marks);
// var ff = student.friends-1
console.log(student.friends[2]);
console.log(student.show());
student.show();