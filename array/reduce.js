var numbers = [10, 20, 30, 40, 50];

//var totalSum = numbers.reduce((total, num) => total + num, 0);

//console.log(totalSum); 


// callback parameters=> previousValue, currentValue,index,array
Array.prototype.myReduce = function (callback, initialValue) {
  const array = this;
  if (!array) throw new Error("Array cannot be undefined");

  let firstIndex = 0;

  if (array.length === 0) {
    if (initialValue) {
      return initialValue;
    } else {
      throw new Error("Need to pass initial value if array is empty");
    }
  }
  let accumulator = initialValue !== undefined ? initialValue : array[0];

  if (arguments.length === 1) {
    // Initial value not present
    firstIndex = 1;
  }

  for (let index = firstIndex; index < this.length; index++) {
    accumulator = callback(accumulator, array[index], index, array);
  }
  return accumulator;
};

var numbers = [1, 2, 3, 4, 5];

console.log(numbers.myReduce((total, num) => total + num, 0));
