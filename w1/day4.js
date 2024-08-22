/*
Write a for-loop that will iterate the array of Numbers, nums, and determine if each number is even or odd. If it is even, increment the evenCount variable by 1, and if it is odd, increment the oddCount variable by 1.

ex:
const nums = [2, 4, 5, 25, -2, 11, 100]
console.log(evenCount) --> 4
console.log(oddCount) --> 3
*/

// const nums = [2, 4, 5, 25, -2, 11, 100]
// let evenCount = 0
// let oddCount = 0

// // YOUR CODE HERE:


// console.log("evenCount", evenCount)
// console.log("oddCount", oddCount)


const nums = []
let evenCount = 0
let oddCount = 0
// Generates a random length
let randomLength = Math.floor(Math.random() * (1 + 100) + 1);
// Takes the random length and loops that many times adding random numbers to the arry
for (i = 0; i < randomLength; i++){
  let randomNum = Math.floor(Math.random() * (1 + 100) + 1);
  nums.push(randomNum)
}
// Runs the number of times === to the length of nums and increments even or odd
for (let i = 0; i < nums.length; i++){
  if (nums[i] % 2 === 0){
    evenCount++
  } else {
    oddCount++
  }
}
console.log(nums)
console.log("nums count", nums.length)

console.log("evenCount", evenCount)
console.log("oddCount", oddCount)