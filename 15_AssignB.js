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


for (let index = 0; index < array_employess.length; index++) {
    if (array_employess[index].emp_company === "TCS") {
        console.log(`Employer name is: -${array_employess[index].emp_name} and he works in :- ${array_employess[index].emp_company}`  );
    }
};

console.log(`*********************************`);
for (let index = 0; index < array_employess.length; index++) {
    if (array_employess[index].emp_dept === "Finance") {
        console.log(array_employess[index].emp_name + " work in finance");
    }
};


// for (let index = 0; index < array_employess.length; index++) {
//     if (array_employess[index].emp_company === "TCS") {
//         tcs_employes.push(array_employess[index])
//     }
    
// }
// console.log(`${tcs_employes.}`);

array_employess.forEach(Employee => {
    if (Employee.emp_name.startsWith("R")) {
        console.log(Employee.emp_name);
        
    }
});

for (let index = 0; index < array_employess.length; index++) {
   
    const element = array_employess[index];
    if (element.emp_salary > 75000) {
        console.log(`THE NAME OF THE EMPLOYEE :-${element.emp_name} AND HIS SALARY IS :-${element.emp_salary}`);
    }
}

for (let index = 0; index < array_employess.length; index++) {
   
    const element = array_employess[index];
    if (element.emp_dept == "IT" && element.emp_salary >= 50000) {
        console.log(`THE NAME OF THE EMPLOYEE :-${element.emp_name} HE WORK IN A DEPERMENT :- ${element.emp_dept} AND HIS SALARY IS :-${element.emp_salary}`);
    }
};
console.log(`*********************************************`);
for (let index = 0; index < array_employess.length; index++) {
   
    const element = array_employess[index];
    if (element.emp_company == "Infy") {
        console.log(`THE NAME OF THE EMPLOYEE :-${element.emp_name} HE WORK IN A DEPERMENT :- ${element.emp_dept} AND HIS SALARY IS :-${element.emp_salary}`);
    }
}
