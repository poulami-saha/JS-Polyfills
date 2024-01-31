//MDN Definition of Promise.All
//The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
//This returned promise fulfills when all of the input's promises fulfill
//(including when an empty iterable is passed),
//with an array of the fulfillment values.
//It rejects when any of the input's promises rejects, with this first rejection reason.

//Requirements to create a polyfill of Promise.all
//1. It will return a promise
//2. The promise will resolve with the result of all the input promises
//or reject with the error message of the first failed input promise.
//3. The results are returned in the same order in which it has been passed.

function myPromiseAll(promises) {
  const results = [];
  let completedPromises = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
}

//Example 1
function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), 42, Promise.resolve(3)];

//run promise.all
myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);

// Example 2
function taskPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
}

 const tasks = [taskPromise(1000), taskPromise(2000), taskPromise(3000)];

 //run promise.all
myPromiseAll(tasks)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
