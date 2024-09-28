function grades(grade) {
    if (grade > 79) {
      return 'Your grade is A';
    } else if (grade <= 79 && grade > 60) {
      return 'Your grade is B-';
    } else if (grade <= 60 && grade > 49) {
      return 'Your grade is C-';
    } else if (grade <= 49 && grade >= 40) {
      return 'Your grade is D-';
    } else {
      return 'Your grade is E-';
    }
  }
  
  
  let grade = prompt('Enter your grade');
  grade = parseInt(grade); 
  
  
  console.log(grades(grade));