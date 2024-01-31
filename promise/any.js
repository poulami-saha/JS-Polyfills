//MDN Definition of Promise.All
//The Promise.any() static method takes an iterable of promises as input and returns a single Promise.
//This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.
//It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

//Requirements
//1 Returns a new Promise
//2 Returned promise resolves as soon as the current promise is resolved
//3 rejects when all the input promises rejects

const myPromiseAny = (promises) => {
  const errors = new Array(promises.length);
  let rejectedPromises = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          errors[index] = error;
          rejectedPromises++;
          if (rejectedPromises == promises.length) {
            reject(errors);
          }
        });
    });
  });
};

//Example 1
const test1 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "one");
});

const test2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, "two");
});

const test3 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "three");
});

myPromiseAny([test1, test2, test3])
  .then(function (value) {
    // first and third fails, 2nd resolves
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
