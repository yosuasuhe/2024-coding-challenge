// Coding Challenge 2024

// 12/366

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// function arrayPlusArray(arr1, arr2) {
//   let total = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     total += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     total += arr2[i];
//   }
//   return total;
// }

function arrayPlusArray(arr1, arr2) {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      total += arguments[i][j];
    }
  }

  return total;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
