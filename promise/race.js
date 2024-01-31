//MDN definition of Promise.Race
//The Promise.race() static method takes an iterable of promises as input and returns a single Promise.
//This returned promise settles with the eventual state of the first promise that settles.

//Requirements
//It returns a promise
//The return promise fullfil or rejects as soon as one of the input promise fullfil or rejects
//Returned promise resolves with the value of the input promise or rejects with the reason of the input promise

const myPromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject).catch(reject);
    });
  });
};
//Example 1
const test1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const test2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, "two");
});

const test3 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "three");
});

myPromiseRace([test1, test2, test3])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
