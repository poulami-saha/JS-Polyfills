Array.prototype.myFill = function (value, start = 0, end = 0) {
  const array = this;
  if (end === 0) end = array.length - 1;
  array.forEach((_, index) => {
    if (index >= start && index <= end) {
      array[index] = value;
    }
  });
  return array;
};

const array1 = [1, 2, 3, 4];
console.log(array1.myFill(0, 2, 4));
console.log(array1.myFill(5, 1));
console.log(array1.myFill(6));
