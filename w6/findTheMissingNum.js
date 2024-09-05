// https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d


// "The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// "You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?"



function missing(nums) {

  let numSet = new Set(nums) // O(n)
  // { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ... 100 }

  for (let i = 0; i < 100; i++) { // O(n)
    if (!numSet.has(i)) { // O(1) runtime for sets (array.includes() is O(n))
      return i
    }
  }
  // total runtime = O(n) + O(n) = O(2n) --> O(n)
}






// function missingNum(nums) {
//   // get sum of 1-100
//   let totalSum = (100 * (100 + 1)) / 2
//   // get sum of nums array
//   let numSum = nums.reduce((a, c) => a + c)
  
//   // return the difference
//   return totalSum - numSum
// }