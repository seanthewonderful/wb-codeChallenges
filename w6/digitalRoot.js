// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// https://www.codewars.com/kata/541c8630095125aba6000c00

const sumDigitsInNumber = (num) => {
  let strNum = num.toString();
  let numArr = strNum.split("");

  let newSum = numArr.reduce((acc, curr) => Number(acc) + Number(curr));
  if (newSum > 9) {
    return sumDigitsInNumber(newSum);
  } else {
    return newSum;
  }
};

console.log(sumDigitsInNumber(16));
console.log(sumDigitsInNumber(942));
console.log(sumDigitsInNumber(132189));
console.log(sumDigitsInNumber(493193));
