# Data Structures & Algorithms in JavaScript

## What is Data Structure:

A data structure is a specific way of organizing, storing and accessing
data.

## What is an Algorithm:

A set of instructions that tells a computer how to do something, or you
can also say step by step solution of the problem is called algorithm.

## How can we tell if the code we just wrote is good code?

- The answer is `Big O` notation

## Big O

Big O notation helps us understand `how long` an algorithm will take to run _(time complexity)_ or `how much` memory it will need as the amount of data it handles grows _(space complexity)_.

### `O(n)`

Signifies that the execution time of algorithm grows `linearly` in proportion to the size of the `input data` (n).

**Example:**

_Imagine you have a list of groceries. To fine a specific item (like milk), you might need to scan through the entire list. If the list has 5 items, it'll take a relatively short time. But if the list has 500 items, it'll take considerably longer. This is the essence of linear time complexity._

```javascript
const groceries = ["sugar", "bread", "milk", "eggs", "flour"];

/*
 * =========================================
 *         For small list of items
 * =========================================
 */
// O(n)
const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found ${item}`);
    }
  }
};

/*
 * =========================================
 *         For large list of items
 * =========================================
 */

// O(n)
const searchForItem = (item) => {
  // n
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found ${item}`);
    }
  }

  // n
  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      console.log(`Found ${item}`);
    }
  }

  // n+n = 2n --> O(2n)
  // Drop the constant, so it becomes O(n) not O(2n)
};

searchForItem("milk"); // Found milk
```

### `O(1)`

**O(1)** also known as `constant` time, signifies that the execution time of an algorithm remains `constant` regardless of the input size.

**Example:**

_Imagine you have a box filled with items, and you know exactly where each item is located. To get a specific item, you go directly to its location, taking the same amount of time irrespective of how many items are in the box._

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// O(1)
const getElement = (arr, index) => arr[index];

console.log(getElement(numbers, 3)); // 4
```

### `O(n^2)`

Indicates that the algorithm's execution time grows quadratically with the size of the input data (represented by n).
