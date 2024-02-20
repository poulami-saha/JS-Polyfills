let arr = [6, 2, 7, 4, 5];
// console.log(arr.sort());

Array.prototype.mySort = function (callback) {
  const arr = this;
  if (!callback) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let c = arr[i];
          arr[i] = arr[j];
          arr[j] = c;
        }
      }
    }
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i; j < arr.length; j++) {
        callback(arr[i], arr[j]);
      }
    }
  }

  return arr;
};

console.log(arr.mySort((a, b) => b - a));
console.log(arr.mySort((a, b) => a - b));
console.log(arr.mySort());

const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];
console.log(
  students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade)
);
