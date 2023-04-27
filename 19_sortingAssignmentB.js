class Employee  {
    constructor(emp_id , emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
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

let array_employess = [emp_anil , emp_radha , emp_rishi , emp_sonali , emp_monika , emp_viny , emp_mahi] ; 

let ff = array_employess.sort((emp1,emp2) => {
    return emp1.emp_id > emp2.emp_id ? 1 : -1;
   
});
// console.log(ff);
ff.map((emp)=>{
    console.log("Employe id in ascending order",emp.emp_id,emp.emp_name,emp.emp_dept);
});

console.log(`********************`);

let gg =  array_employess.sort((emp1,emp2) => {
   return emp1.emp_dept > emp2.emp_dept ? 1 : -1;
});

gg.map((emp)=>{
console.log("Sorting emploee in ascending order",emp.emp_name,emp.emp_dept);
});

console.log(`********************`);


let ll =  array_employess.sort((emp1,emp2) => {
    return emp1.emp_salary > emp2.emp_salary ? -1 : 1;
 })
 
 ll.map((emp)=>{
 console.log("Sorting emploee in decending order of there salary ",emp.emp_name,emp.emp_salary,emp.emp_company);
 })