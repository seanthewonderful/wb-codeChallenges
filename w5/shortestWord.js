// Given a string of space-separated words, return the length of the shortest word.

// ex: 
// shortestWord("super cali fragile istic expiali docious") --> "cali"


function shortestWord(str) {
  let lengths = str.split(' ').map(word => word.length)
  return Math.min(...lengths)
}

console.log(shortestWord("super cali fragile istic expiali docious"))