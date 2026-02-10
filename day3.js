// Day 3 Practice - JavaScript Async & Advanced Basics

// ----------------------------
// Callbacks
// ----------------------------
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback("Data received using callback");
  }, 1000);
}

fetchDataCallback((message) => {
  console.log(message);
});

// ----------------------------
// Promises
// ----------------------------
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Data received using Promise");
      } else {
        reject("Something went wrong");
      }
    }, 1000);
  });
}

fetchDataPromise()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// ----------------------------
// Async / Await
// ----------------------------
async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchDataAsync();

// ----------------------------
// setTimeout & setInterval
// ----------------------------
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("Interval count:", counter);

  if (counter === 3) {
    clearInterval(intervalId);
  }
}, 1000);

// ----------------------------
// Fetch API (Mock Example)
// ----------------------------
function mockFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "John",
        role: "Developer"
      });
    }, 1000);
  });
}

async function getUser() {
  const user = await mockFetch();
  console.log("User data:", user);
}

getUser();

// ----------------------------
// Error Handling in Async Code
// ----------------------------
async function asyncWithError() {
  try {
    throw new Error("Async error occurred");
  } catch (error) {
    console.log("Caught error:", error.message);
  }
}

asyncWithError();

// ----------------------------
// Simple Async Problem
// ----------------------------
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTask() {
  console.log("Task started");
  await delay(1000);
  console.log("Task after 1 second");
  await delay(1000);
  console.log("Task completed");
}

runTask();

// ----------------------------
// End of Day 3 Practice
// ----------------------------
