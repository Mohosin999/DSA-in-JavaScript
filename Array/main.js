/**
 * 01. Reverse an array of integers.
 */
// const arr1 = [1, 2, 3, 4];
// process 01 (professional way)
// arr1.reverse()

// process 02
// let newArr = [];
// for (let i = 0; i < arr1.length; i++) {
//   newArr.unshift(arr1[i]);
// }
// console.log("New Array ", newArr);

/**
 * 02. Calculate the highest hourglass sum.
 */
// const arr = [
//   [-9, -9, -9, 1, 1, 1],
//   [0, -9, 0, 4, 3, 2],
//   [-9, -9, -9, 1, 2, 3],
//   [0, 0, 8, 6, 6, 0],
//   [0, 0, 0, -2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];

// let maxSum = -Infinity;

// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 3; j++) {
//     const currentSum =
//       arr[i][j] +
//       arr[i][j + 1] +
//       arr[i][j + 2] +
//       arr[i + 1][j + 1] +
//       arr[i + 2][j] +
//       arr[i + 2][j + 1] +
//       arr[i + 2][j + 2];

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }
// }

// console.log(maxSum);
