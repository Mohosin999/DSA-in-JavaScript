# Data Structures & Algorithms in JavaScript

## What is Data Structure?

A data structure is a specific way of organizing, storing, and accessing data efficiently.

ডাটা স্ট্রাকচার হল একটি নির্দিষ্ট পদ্ধতি যার মাধ্যমে ডাটাকে সংগঠিত, সংরক্ষণ ও অ্যাক্সেস করা হয়। এটি কোডিং ও অ্যালগরিদমে গুরুত্বপূর্ণ ভূমিকা রাখে।

## What is an Algorithm:

An algorithm is a set of step-by-step instructions that tells a computer how to solve a problem.

অ্যালগরিদম হল একটি নির্দিষ্ট ধাপে ধাপে নির্দেশনা যা কম্পিউটারকে কোনো সমস্যা সমাধানের উপায় বলে দেয়। সহজভাবে বললে, এটি একটি প্রক্রিয়া বা কৌশল যা একটি নির্দিষ্ট কাজ সম্পন্ন করতে ব্যবহৃত হয়।

## How can we tell if the code we just wrote is good code? (আমরা কিভাবে জানবো যে আমাদের কোড ভালো?)

The answer is `Big O` notation

এর উত্তর হল Big O নোটেশন। এটি আমাদের বলে দেয় যে আমাদের অ্যালগরিদম কত দ্রুত কাজ করবে এবং কত মেমোরি ব্যবহার করবে।

## Big O

Big O notation helps us understand `how long` an algorithm will take to run _(time complexity)_ or `how much` memory it will need _(space complexity)_ as the amount of data grows.

Big O নোটেশন একটি উপায় যার মাধ্যমে আমরা বুঝতে পারি একটি অ্যালগরিদম কত দ্রুত চলবে (টাইম কমপ্লেক্সিটি) এবং এটি কত মেমোরি ব্যবহার করবে (স্পেস কমপ্লেক্সিটি)।

### `O(n) - Linear Time Complexity`

This means that as the input size grows, the execution time increases linearly.

এটি বোঝায় যে ইনপুট ডাটার আকার বাড়লে, এক্সিকিউশন টাইম সরাসরি অনুপাতে বৃদ্ধি পাবে।

**Example:**

_Imagine you have a list of groceries. You might need to scan the entire list to find a specific item (like milk). If the list has 5 items, it'll take a relatively short time. But if the list has 500 items, it'll take considerably longer. This is the essence of linear time complexity._

কল্পনা করুন আপনার কাছে মুদিখানার একটি তালিকা আছে। একটি নির্দিষ্ট জিনিস (যেমন দুধ) খুঁজে পেতে আপনাকে পুরো তালিকাটি স্ক্যান করতে হতে পারে। যদি তালিকায় ৫টি জিনিস থাকে, তাহলে তুলনামূলকভাবে কম সময় লাগবে। কিন্তু যদি তালিকায় ৫০০টি জিনিস থাকে, তাহলে অনেক বেশি সময় লাগবে। এটাই রৈখিক সময়ের জটিলতার মূল কথা।

```javascript
const groceries = ["sugar", "bread", "milk", "eggs", "flour"];

/*
 * =========================================
 *           In the case of a loop
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
 *          In the case of two loops
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

### `O(1) - Constant Time Complexity`

This means the execution time remains constant, regardless of input size.

এর মানে হল ইনপুট আকার যাই হোক না কেন, অ্যালগরিদমের এক্সিকিউশন টাইম সবসময় একই থাকবে। এটি পরিবর্তন হবে না বা ইনপুট আকার বৃদ্ধির সাথে সাথে বৃদ্ধি পাবে না।

**Example:**

_Imagine you have a box filled with items, and you know exactly where each item is located. To get a specific item, you go directly to its location, taking the same amount of time irrespective of how many items are in the box._

ধরুন, আপনার কাছে একটি বাক্স রয়েছে যার মধ্যে অনেকগুলি আইটেম রয়েছে। আপনি যদি জানেন কোন আইটেম কোথায় আছে, তাহলে সরাসরি সেই স্থানে গিয়ে আইটেমটি নিতে পারবেন। এতে সময় সবসময় একই থাকবে, বাক্সে যতই আইটেম থাকুক না কেন।

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// O(1)
const getElement = (arr, index) => arr[index];

console.log(getElement(numbers, 3)); // 4
```

### `O(n^2) - Quadratic Time Complexity`

When an algorithm has nested loops, its execution time increases quadratically.

যখন একটি অ্যালগরিদমের ভিতরে আরেকটি লুপ থাকে, তখন তার এক্সিকিউশন টাইম ইনপুট আকারের বর্গ অনুসারে বাড়তে থাকে।

**Example:**

_Imagine you have a box of items and want to compare each item with every other item to find specific pairs. As the number of items (n) increases, the number of comparisons (n^2) grows much faster._

কল্পনা করুন আপনার কাছে জিনিসপত্রের একটি বাক্স আছে এবং আপনি নির্দিষ্ট জোড়া খুঁজে পেতে প্রতিটি জিনিসকে অন্য জিনিসের সাথে তুলনা করতে চান। আইটেমের সংখ্যা (n) বাড়ার সাথে সাথে তুলনার সংখ্যা (n^2) অনেক দ্রুত বৃদ্ধি পায়।

```javascript
function findPairs(arr) {
  // Nested loop - takes double time
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`Pair ${arr[i]} ${arr[j]}`);
    }
  }

  // O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log(q);
  }

  // If we combine all the "0" operations it becomes O(n^2 + n)
  // O(n^2) is a Dominant term
  // "n" is a Non-Dominant term
  // So we remove the "non-dominant" term and we're only left with O(n^2)
  // This way, we simplify our bigO
}

const numbers = [1, 2, 3, 4, 5];

findPairs(numbers);
```

### `O(log n) - Logarithmic Time Complexity`

This means as the input size increases, execution time grows very slowly.

এর মানে হল ইনপুট আকার বৃদ্ধি পেলেও, এক্সিকিউশন টাইম খুব ধীরে বৃদ্ধি পায়। উদাহরণস্বরূপ, বাইনারি সার্চ অ্যালগরিদম।

**Example:**

_Imagine you have a dictionary, and you want to find a word. Instead of checking page by page, you open the book in the middle and decide whether to go left or right._

ধরুন, আপনার কাছে একটি ডিকশনারি রয়েছে, এবং আপনি একটি নির্দিষ্ট শব্দ খুঁজছেন। প্রতিটি পৃষ্ঠা ঘেঁটে দেখার পরিবর্তে, আপনি বইয়ের মাঝখানে খুলবেন এবং সিদ্ধান্ত নেবেন বাম দিকে যাবেন নাকি ডান দিকে।

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const numbers = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(numbers, 7)); // Output: 3
```
