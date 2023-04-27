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
const emp_monika = new Employee(77,"Monika","IT",40000,"WIPRO");
const emp_viny = new Employee(88,"vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

let array_employess = [emp_anil , emp_radha , emp_rishi , emp_sonali , emp_monika , emp_viny , emp_mahi] ; 

const uu = array_employess.filter((value)=>{
    return value.emp_company  == "TCS"
});
console.log(uu);
uu.forEach(element => {
    console.log(element.emp_name,element.emp_company);
});

let yy = array_employess.filter((emp)=>{
    return emp.emp_company === "WIPRO";
});
console.log(yy);
let jj = 0;
yy.forEach(element => {
    let  oo = element.emp_salary;
    jj = jj + oo;
   
}); 
console.log(jj);
let mm =  jj / yy.length
console.log(mm);

console.log(`************************************`);
let qq = array_employess.filter((values)=>{
    values.emp_company === "WIORO" && values.emp_company === "Infy"
        return values;
})
console.log(qq);
let gg = 0;
qq.forEach(element => {
  let  bb = element.emp_salary;
  gg= gg + bb;
 
});
console.log(gg);  

let ll = gg / qq.length

console.log("average salary of employe from companies in wipro and infy",ll);