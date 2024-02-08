function toCamelCase(str) {
  let result = "";
  let temp = [];
  let temp2 = "";
  temp2 = str.split("-");

  temp = temp2.join("").split("_");

  for (let i = 0; i < temp.length; i++) {
    if (i === 0) {
      result += temp[0];
    } else {
      let firstLetter = temp[i].charAt(0);
      let firstLetterCap = firstLetter.toUpperCase();
      let remainingLetters = temp[i].slice(1);
      let fullWord = firstLetterCap + remainingLetters;
      result += fullWord;
    }
  }
  return result;
}

console.log(toCamelCase(""));
console.log(toCamelCase("the_stealth_warrior-Echo"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
