// Day 4 Practice - JavaScript Logic & Real-World Patterns

// ----------------------------
// Array Problem Solving
// ----------------------------
const numbers = [3, 7, 2, 9, 4, 6];

// find max
const maxNumber = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log("Max number:", maxNumber);

// sort ascending
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);

// ----------------------------
// String Operations
// ----------------------------
const message = "JavaScript Practice Day Four";

const wordCount = message.split(" ").length;
console.log("Word count:", wordCount);

const reversedString = message.split("").reverse().join("");
console.log("Reversed string:", reversedString);

// ----------------------------
// Object & Array Combination
// ----------------------------
const users = [
  { id: 1, name: "Alice", score: 85 },
  { id: 2, name: "Bob", score: 60 },
  { id: 3, name: "Charlie", score: 92 }
];

// filter
const passedUsers = users.filter((user) => user.score >= 70);
console.log("Passed users:", passedUsers);

// map
const userNames = users.map((user) => user.name);
console.log("User names:", userNames);

// ----------------------------
// Grouping Data
// ----------------------------
const groupedResult = users.reduce((group, user) => {
  if (user.score >= 70) {
    group.passed.push(user);
  } else {
    group.failed.push(user);
  }
  return group;
}, { passed: [], failed: [] });

console.log("Grouped result:", groupedResult);

// ----------------------------
// Shallow Copy vs Reference
// ----------------------------
const originalUser = { name: "David", age: 30 };
const copiedUser = { ...originalUser };

copiedUser.age = 31;

console.log("Original user:", originalUser);
console.log("Copied user:", copiedUser);

// ----------------------------
// Optional Chaining & Nullish Coalescing
// ----------------------------
const profile = {
  name: "Emma",
  address: {
    city: "London"
  }
};

console.log(profile.address?.city);
console.log(profile.address?.pincode ?? "Pincode not available");

// ----------------------------
// Simple Validation Function
// ----------------------------
function validateUser(user) {
  if (!user || typeof user !== "object") return false;
  if (!user.name || !user.age) return false;
  return true;
}

console.log(validateUser({ name: "Sam", age: 25 }));
console.log(validateUser({ name: "Sam" }));

// ----------------------------
// Small Real-World Task
// ----------------------------
function calculateAverageScore(users) {
  const total = users.reduce((sum, user) => sum + user.score, 0);
  return total / users.length;
}

console.log("Average score:", calculateAverageScore(users));

// ----------------------------
// End of Day 4 Practice
// ----------------------------
