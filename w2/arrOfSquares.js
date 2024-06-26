// Given a number input, return an array where each element is the squared value of each digit of the number:
// ex: arrOfSquares(9451)  —> [81, 16, 25, 1]

function arrOfSquares(num) {
  let numStr = String(num);
  let squaresArr = [];

  for (i = 0; i < numStr.length; i++) {
    squaresArr.push(Number(numStr[i]) ** 2);
  }

  return squaresArr;
}

console.log(arrOfSquares(9451)); // [81, 16, 25, 1]

// Given an input array of numbers, return an array where each element is the square of the original number.
// ex: squareArr([1, 2, 5, 7, 9])  —> [1, 4, 25, 49, 81]
