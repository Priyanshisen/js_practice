// Day 1 Practice - JavaScript Basics
// Remote Internship

// ----------------------------
// Variables & Data Types
// ----------------------------
let name = "John";
const age = 22;
let isIntern = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Intern:", isIntern);

// ----------------------------
// Functions
// ----------------------------
function add(a, b) {
  return a + b;
}

const greet = (personName) => {
  return `Hello, ${personName}!`;
};

console.log("Add:", add(5, 3));
console.log(greet("Alice"));

// ----------------------------
// Arrays
// ----------------------------
const numbers = [1, 2, 3, 4, 5];

// push
numbers.push(6);

// map
const doubledNumbers = numbers.map((num) => num * 2);

// filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log("Numbers:", numbers);
console.log("Doubled:", doubledNumbers);
console.log("Even:", evenNumbers);

// ----------------------------
// Objects
// ----------------------------
const user = {
  name: "Sarah",
  age: 25,
  isActive: true
};

console.log("User Name:", user.name);

// update object
user.age = 26;
console.log("Updated User:", user);

// ----------------------------
// Conditional Statements
// ----------------------------
const score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// ----------------------------
// Loops
// ----------------------------
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("While Loop:");
let count = 1;
while (count <= 3) {
  console.log(count);
  count++;
}

// ----------------------------
// Simple Problem
// ----------------------------
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("Max number:", findMax(numbers));

// ----------------------------
// End of Day 1 Practice
// ----------------------------
