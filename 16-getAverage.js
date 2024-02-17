// Coding Challenge 2024

// 16/366

// https://www.codewars.com/kata/563e320cee5dddcf77000158

// function getAverage(marks) {
//   let total = 0;
//   for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }
//   return Math.floor(total / marks.length); // PEMBULATAN KEBAWAH
//   // return Math.ceil(total / marks.length); PEMBULATAN KEATAS
//   // return Math.round(total / marks.length); PEMBULATAN KE NILAI TERDEKAT
// }

// function getAverage(marks) {
//   return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
// }

const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
