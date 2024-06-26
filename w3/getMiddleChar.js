// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// getMiddle("test") should return "es"
// getMiddle("testing") should return "t"
// getMiddle("middle") should return "dd"
// getMiddle("A") should return "A"

// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    return s[Math.floor(s.length / 2)];
  }
}