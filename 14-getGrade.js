// Coding Challenge 2024

// 14/366

// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// function getGrade (s1, s2, s3) {
//     const avgScore = (s1+s2+s3)/3;
//     if(avgScore < 60){
//         return 'F';
//     } else if(avgScore < 70){
//         return 'D';
//     } else if(avgScore < 80){
//         return 'C';
//     } else if(avgScore < 90){
//         return 'B';
//     } else return 'A';
// }

// function getGrade (s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
//   }

function getGrade(s1, s2, s3) {
  var avg = (s1 + s2 + s3) / 3;
  switch (true) {
    case avg >= 90:
      return "A";
    case avg >= 80:
      return "B";
    case avg >= 70:
      return "C";
    case avg >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(100, 85, 96));
console.log(getGrade(92, 93, 94));
console.log(getGrade(70, 70, 100));
console.log(getGrade(82, 85, 87));
console.log(getGrade(84, 79, 85));
console.log(getGrade(89, 89, 90));
console.log(getGrade(70, 70, 70));
console.log(getGrade(75, 70, 79));
console.log(getGrade(65, 70, 59));
console.log(getGrade(66, 62, 68));
console.log(getGrade(44, 55, 52));
