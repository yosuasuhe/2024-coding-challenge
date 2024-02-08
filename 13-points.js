// Coding Challenge 2024

// 13/366

// https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//   let result = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) {
//       result = result + 3;
//     } else if (games[i][0] < games[i][2]) {
//       result = result + 0;
//     } else {
//       result = result + 1;
//     }
//   }
//   return result;
// }

// const points=games=>games.reduce((output,current)=>{
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
//   },0)

// function points(games) {
//   let result = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) {
//       result += 3;
//     } else if (games[i][0] === games[i][2]) {
//       result += 1;
//     }
//   }
//   return result;
// }

function points(games) {
  const result = games.reduce(
    (acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc,
    0
  );
  return result;
}

// const points = (g) => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
);
