// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.


const isPalindrome = (str) => {
  x = x.toLowerCase()
  let backWord = ""
  
  for (let i = x.length - 1; i >= 0; i--){
    backWord += x[i]
  }
  
  return backWord === x

  // return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
}