// Complete the function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// CodeWars: https://www.codewars.com/kata/517abf86da9663f1d2000003

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"






























// const toCamelCase = (str) => {
//   const strArr = str.split("");
//   strArr.forEach((letter, idx) => {
//     if (idx === 0) {
//       strArr[idx] = strArr[idx].toLowerCase();
//     }
//     if (letter === "-" || letter === "_") {
//       strArr.splice(idx, 1);
//       strArr[idx] = strArr[idx].toUpperCase();
//     }
//   });
//   return strArr.join("");
// };

// function toCamelCase(str) {
//   let splitStr = str.replaceAll("-", " ").replaceAll("_", " ").split(" ");
//   let returnStr = splitStr[0];

//   for (i = 1; i < splitStr.length; i++) {
//     returnStr += splitStr[i].slice(0, 1).toUpperCase() + splitStr[i].slice(1);
//   }

//   return returnStr;
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));