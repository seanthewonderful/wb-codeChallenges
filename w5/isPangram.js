// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(str){
  const letters = "abcdefghijklmnopqrstuvwxyz"
  let pangram = new Set()

  for (const letter of str) {
    if (letters.includes(letter.toLowerCase())) {
      pangram.add(letter.toLowerCase())
    }
  }
  
  return pangram.size === 26
}