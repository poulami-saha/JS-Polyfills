//MDN definition of Promise.AllSettled
//The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise.
//This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed),
//with an array of objects that describe the outcome of each promise.

//Requirements
//Returns a new Promise
//Map the array of promises to return an object with status and value/error depending upon the promised settlement.
//Returned promise resolves with the value of the input promise or rejects with the reason of the input promise

const myPromiseAllSettled = (promises) => {
  const mappedPromises = promises.map((promise) =>
    Promise.resolve(promise).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err })
    )
  );
  return Promise.all(mappedPromises);
};

//Example 1
const a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 200)
);
const b = new Promise((resolve, reject) => reject(9));
const c = new Promise((resolve) => resolve(5));

myPromiseAllSettled([a, b, c]).then((val) => {
  console.log(val);
});
