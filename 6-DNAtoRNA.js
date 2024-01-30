// Coding Challenge 2024

// 4/366

// https://www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
// create a function which returns an RNA sequence from the given DNA sequence
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "T") {
//       rna += "U";
//     } else {
//       rna += dna[i];
//     }
//   }
// for(let i = 0; i < dna.length; i++){
//     rna += dna[i] === 'T' ? 'U' : dna[i];
// }
//   return rna;
// Menggunakan Mapping
//   return dna
//     .split("")
//     .map((el) => (el === "T" ? "U" : el))
//     .join("");
// }

// Menggunakan Regex
// const DNAtoRNA = (dna) => dna.replace(/T/g,'U');
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GACCGCCGCC"));
