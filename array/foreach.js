let arr = [1, 2, 3, 4, 5];

//arr.forEach((elem, index?, arr?) => console.log(elem, index, arr));

Array.prototype.myForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((elem, index, arr) => console.log(elem, index, arr));
