Array.prototype.myShift = function () {
  const array = this;
  const elementRemoved = array[0];
  array.forEach((_, index) => {
    array[index] = array[index + 1];
  });
  array.length = array.length - 1;
  return elementRemoved;
};

const arr = [1, 2, 3];
console.log(arr.myShift());
console.log(arr);
