// Coding Challenge 2024

// 5/366

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// function solution(str, ending){
//     if(str.endsWith(ending)){
//         return true;
//     }
//     else return false;
//   }

const solution = (str, ending) => {
  return str.endsWith(ending);
};

console.log(solution("abcda", ""));
