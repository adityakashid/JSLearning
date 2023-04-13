class Employee  {
    constructor(emp_it , emp_name,emp_dept,emp_salary,emp_company){
        this.emp_it = emp_it;
        this.emp_name =emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company =emp_company;
    }
    
}
const emp_anil = new Employee(22,"Aanil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"WIPRO");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

let array_employess = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi] ;
let tcs_employes =[];

array_employess.forEach(element => {
    if (element.emp_company == "TCS") {
        console.log(`the name of the employee :-${element.emp_name} company name :- ${element.emp_company}`);
    }
});
array_employess.forEach(element => {
    if (element.emp_salary >= 50000) {
        console.log(`the name of the employee :-${element.emp_name} and there salary :- ${element.emp_salary}`);
    }
});

let sum = 0;
array_employess.forEach(element => {
    sum = sum + element.emp_salary
});
console.log("sum of all amount of sallary :- ",sum);

let sumOfSalary = 0;
let average =0;
array_employess.forEach(element => {
    sumOfSalary = sumOfSalary + element.emp_salary;
    let totalEmployes = array_employess.length;
    
    average = sumOfSalary / totalEmployes;
});
console.log("Average salary of all employes :-",average);

array_employess.forEach(element => {
    if (element.emp_dept == "IT" || "HR" ) {
        if (element.emp_salary >= 75000) {
            console.log(`The name of the employes are :- ${element.emp_name} and there salary ${element.emp_salary}`);
        }
    }
});