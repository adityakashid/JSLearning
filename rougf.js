function gradeCalculation(marks) {

    if (!marks) {
      return `Marks can't be ${marks} `;
    }
    else{
        return `Valid marks ${marks}`
    }
      
  }
  
  var result = gradeCalculation(null);
  console.log(result);
  
  var result = gradeCalculation(20);
  console.log(result);
  