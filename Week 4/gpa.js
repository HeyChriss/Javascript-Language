function getGrades(inputSelector) {
    const grades = document.querySelector("#grades").value;
    const gradesSplit = grades.split(",");
    const newGrades = gradesSplit.map((grade) => grade.trim().toUpperCase());
    console.log(newGrades);
    return newGrades;
  
  function determineGrade(grade) {
    let points = 0;
  if (grade === "A") { points = 4;}
   else if (grade === "B") {points = 3;} 
   else if (grade === "C") {points = 2;}
    else if (grade === "D") {points = 1;}
  return points;
}
  
  function calculateGpa(grades) {
  const gradePoints = grades.map((grade) => determineGrade(grade));
  const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
  return gpa.toFixed(2);
}

  
  function outputGpa(gpa, selector) {
        const outputElement = document.querySelector(selector);
        outputElement.innerText = gpa;
}
  
    function clickHandler() {
        const grades = getGrades();
        const gpa = calculateGpa(grades);
        outputGpa(gpa, "#output");
      }
    }   