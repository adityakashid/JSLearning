function print() {
    console.log(`============================================================`);
};

const arrayNums = [ 20,3,4,56,90,400,49];
//shallow clone
const clonearrayNum = arrayNums;

clonearrayNum.push(55,66);
console.log(typeof arrayNums.length-1);
console.log(clonearrayNum);

//deep clone with spread operator

const spradeCloneArrayNum = {...arrayNums};

// const spradeCloneArrayNum = JSON.parse(JSON.stringify(arrayNums)); //USING JSON

arrayNums.push(10,25);
console.log("orignal array",arrayNums);
console.log("spread clone array",spradeCloneArrayNum);

const arrayEven = [20,30,14,8];

const arryaMerge =arrayNums.concat(arrayEven) // this methd gave an object 
// const arryaMerge =arrayNums+arrayEven // this method gave an string 
console.log(arryaMerge);

const employee_info ={
    emp_id : 27,
    emp_name: "Jahn Doe",
    salary : {
        july_month:"40,0000 INR",
        aug_month:"50,0000 INR",
        jun_month: "65,0000 INR"
    },
    address:{
        location:{
            colony:"OM Vrindavan Society",
            street:"Kanch pokli , 431202",
        },
        city:"MUMBAI",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91 9096-4587 65"]
};
print();
console.log(`CITY :-${employee_info.address.city},STATE :-${employee_info.address.state}, COUNTRY:-${employee_info.address.country}`);
print();
console.log(employee_info.mobiles);
print();

const deepJsonCloning = JSON.parse(JSON.stringify(employee_info));
deepJsonCloning.salary.july_month ="80,0000 INR"
employee_info.address.country = "United Kingdom";
console.log(employee_info);
print();
console.log(deepJsonCloning);