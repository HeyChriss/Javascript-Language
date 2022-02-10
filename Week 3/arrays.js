// Activity 1 
const numbers = ["one", "two", "three"];
const numbersHtml = numbers.map(function (number) {
  return `<li>${number}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

// Activity 2
const grades = ["A", "B", "A"];
function convertPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertPoints);
// Activity 3
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// Activity 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});
const shortWords = words.filter((word) => word.length < 6);

// Activity 5 
const array = [12, 34, 21, 54];
const number = 21;
let Index = array.indexOf(number);





