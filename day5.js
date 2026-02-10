// Day 5 Practice - JavaScript Prototypes, Promises & Async/Await

// ----------------------------
// Constructor Function & Prototype
// ----------------------------
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// method added to prototype
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

Person.prototype.isAdult = function () {
  return this.age >= 18;
};

const person1 = new Person("John", 22);
const person2 = new Person("Alice", 16);

console.log(person1.greet());
console.log("Is adult:", person1.isAdult());
console.log(person2.greet());
console.log("Is adult:", person2.isAdult());

// ----------------------------
// Promise Basics
// ----------------------------
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Number is positive");
    } else {
      reject("Number is not positive");
    }
  });
}

checkNumber(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// ----------------------------
// Promise Chaining
// ----------------------------
function addTen(value) {
  return Promise.resolve(value + 10);
}

function multiplyByTwo(value) {
  return Promise.resolve(value * 2);
}

addTen(5)
  .then(multiplyByTwo)
  .then((result) => console.log("Final result:", result));

// ----------------------------
// Async / Await
// ----------------------------
async function calculateResult(value) {
  try {
    const added = await addTen(value);
    const multiplied = await multiplyByTwo(added);
    return multiplied;
  } catch (error) {
    console.log("Error:", error);
  }
}

calculateResult(5).then((res) => console.log("Async result:", res));

// ----------------------------
// Simulated API Call
// ----------------------------
function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Sample User"
      });
    }, 1000);
  });
}

async function getUserData() {
  console.log("Fetching user...");
  const user = await fakeApiCall();
  console.log("User received:", user);
}

getUserData();

// ----------------------------
// Error Handling with Async/Await
// ----------------------------
async function asyncErrorExample() {
  try {
    await checkNumber(-1);
  } catch (error) {
    console.log("Caught error:", error);
  }
}

asyncErrorExample();

// ----------------------------
// Prototype Chain Check
// ----------------------------
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// ----------------------------
// End of Day 5 Practice
// ----------------------------
