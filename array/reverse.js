Array.prototype.myReverse = function () {
  const array = this;
  const reverse = (start, end, arr) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    return arr;
  };
  return reverse(0, array.length - 1, array);
};

console.log([1, 2, 3, 4].myReverse());
