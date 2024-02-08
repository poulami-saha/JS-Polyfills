function PromisePolyfill(executor) {
  let onResolve;
  let onReject;
  let isFulfilled = false;
  let isRejected=false;
  let isCalled = false;
  let value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }
  this.then = function (callback) {
    onResolve = callback;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  executor(resolve, reject);
}

const example = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

example.then((res) => console.log(res)).catch((err) => console.err(err));
