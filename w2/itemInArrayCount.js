// Write a function that takes in an item and an array. Return the number of times the given item appears in the array.

// ex: 
// itemInArrayCount(['cat', 'dog', 'mouse', 'cat', 'fox'], 'cat') --> 2


// define function
function itemInArrayCount(item, array) {
  let count = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      count++
    }
  }

  return `The array: '${array}' contains '${item}' ${count} times!`
}




// invoke function
let testItem = 'cat'
let testArray = ['cat', 'dog', 'mouse', 'cat', 'fox']

console.log(itemInArrayCount(testItem, testArray))
console.log()

let testItemTwo
let testArrayTwo = [undefined, undefined, undefined, undefined, undefined]

console.log(itemInArrayCount(testItemTwo, testArrayTwo))
console.log()




























function itemInArrayCount(arr, item) {
    let count = 0
    for (const element of arr) {
        if (element === item) {
            count ++
        }
    }
    
    return count
}


// let arr1 = [1,2,3,4,4,5,4,7,1,3,5]

// console.log(itemInArrayCount(arr1, 5))