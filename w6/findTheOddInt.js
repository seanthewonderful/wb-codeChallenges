// Find the Odd Int

// https://www.codewars.com/kata/54da5a58ea159efa38000836

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("




// Codeium solution
function duplicateEncode(word){
  let wordArr = word.toLowerCase().split('')
  let newWord = ''
  for (let i = 0; i < wordArr.length; i++) {
    let count = wordArr.filter(letter => letter === wordArr[i]).length
    if (count > 1) {
      newWord += ')'
    } else {
      newWord += '('
    }
  }
  return newWord
}