// Coding Challenge 2024

// 10/366

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// function stringToArray(string){

// 	// code code code
//     return string.split(" ")

// }

// Cara barbar
// function stringToArray(string){

//     let newStr = "";
//    let result = [];
//    for (let i= 0; i < string.length; i++) {
//       if (string[i]!==" "){
//           newStr = newStr + string[i]
//       }
//       else{
//           result.push(newStr);
//           newStr = "";
//       }
//    }
//    result.push(newStr);
//    return result;
// }

const stringToArray = (string) => string.split(" ");

console.log(stringToArray("Robin Singh"));
console.log(stringToArray("I love arrays they are my favorite"));
