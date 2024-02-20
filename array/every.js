Array.prototype.myEvery = function (callback) {
  const array = this;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      continue;
    }
    return false
  }
  return true;
};

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.myEvery(isBelowThreshold));