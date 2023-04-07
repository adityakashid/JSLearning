let student=   {
    firstName : " aditya",
    lastName : "Kashid",
    isWorkig: true,
    age:22,
    collegeName: "ABC",
    id : 12132455,
}
//THIS IS OLD METHOD FOR EXTRACTING THE VALUE FROM OBJECT

// let firstNameStd = student,firstName;
// let isWorkingStd = student.isWorkig;
// let ageStd = student.age;
// let collageNameStd =student.collegeName;
// console.log(`Extracted values fron the object is ${firstNameStd} age ${ageStd} is working  ${isWorkingStd} and the college name is${collageNameStd} `);


//NEW SHORTCUT IS 
let {firstName,lastName,age,collegeName,isWorkig} = student;
console.log(`Extracted values fron the object is ${firstName} age ${age} is working  ${isWorkig} and the college name is${collegeName} `);