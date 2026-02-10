// Day 2 Practice - TypeScript Basics
// Remote Internship

// ----------------------------
// Variables & Type Annotations
// ----------------------------
let name: string = "John";
const age: number = 22;
let isIntern: boolean = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Intern:", isIntern);

// ----------------------------
// Type Inference
// ----------------------------
let city = "Bangalore"; // inferred as string
let year = 2026;        // inferred as number

console.log(city, year);

// ----------------------------
// Functions with Types
// ----------------------------
function add(a: number, b: number): number {
  return a + b;
}

const greet = (personName: string): string => {
  return `Hello, ${personName}!`;
};

console.log("Add:", add(10, 5));
console.log(greet("Alice"));

// ----------------------------
// Arrays
// ----------------------------
const numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6);

const doubledNumbers = numbers.map((num) => num * 2);
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log("Numbers:", numbers);
console.log("Doubled:", doubledNumbers);
console.log("Even:", evenNumbers);

// ----------------------------
// Object Types
// ----------------------------
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const user: User = {
  name: "Sarah",
  age: 25,
  isActive: true
};

console.log("User:", user);

// update object
user.age = 26;

// ----------------------------
// Union Types
// ----------------------------
let userId: number | string;

userId = 101;
console.log("User ID:", userId);

userId = "A102";
console.log("User ID:", userId);

// ----------------------------
// unknown vs any
// ----------------------------
let apiData: unknown;

// apiData.name ❌ not allowed

if (typeof apiData === "object" && apiData !== null) {
  console.log("apiData is an object");
}

// ----------------------------
// Type Guard (Dynamic → Structured)
// ----------------------------
interface ApiUser {
  id: number;
  name: string;
}

function isApiUser(data: unknown): data is ApiUser {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "name" in data
  );
}

const response: unknown = {
  id: 1,
  name: "John"
};

if (isApiUser(response)) {
  console.log("API User Name:", response.name);
}

// ----------------------------
// never type example
// ----------------------------
function throwError(message: string): never {
  throw new Error(message);
}

// ----------------------------
// Simple Typed Problem
// ----------------------------
function findMax(arr: number[]): number {
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
// End of Day 2 Practice
// ----------------------------
