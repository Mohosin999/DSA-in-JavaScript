/**
 * ========================================================
 *              Reverse an Array of Integer
 * ========================================================
 */
const numArr = [1, 2, 3, 4, 5];

// Process 01 (Simple array reverse() method)
// console.log(numArr.reverse()); // [ 5, 4, 3, 2, 1 ]

// Process 02 (My Raw Implementation)
const myReverse = (arr) => {
  let emptyArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    emptyArr.push(arr[i]);
  }

  return emptyArr;
};

// console.log(myReverse(numArr)); // [ 5, 4, 3, 2, 1 ]
