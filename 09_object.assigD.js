const professor = {
name : "NEHA SINDHE",
age : 56,
collegeId : "CLG210564",
address : "SB road pune ",
subject : "MATH",
degree : {
    engineering : "B-tech in csc",
    phd : "Adv computer programing",
    diploma : "computer science", 
},
certification : ["Hacker Rank ", "Code-Vista 2.0","IFE COURSES","ADV PROGRAMMING"],

teacherDegree : function () {
    return `Total degree 
    engineering : ${this.degree.engineering},
    phd : ${this.degree.phd},
    diploma : ${this.degree.diploma}, `
},


};

professor.certification.push("Oracle Certified"),
console.log(professor);

let result = professor.teacherDegree();
console.log(result);


professor.subject = ("SCIENCE");

console.log(professor);
//to find out the last element 
console.log(professor.certification.slice(-1));