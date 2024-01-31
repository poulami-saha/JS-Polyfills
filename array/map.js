let arr = [1, 2, 3, 4, 5];

//arr.map((elem, index, arr) => console.log(elem, index, arr));

Array.prototype.myMap = function (callback) {
  var newArray = new Array(this.length);
  this.forEach((elem, index) => {
    newArray.push(callback(elem, index, this));
  });
  return newArray;
};

arr.myMap((elem, index, arr) => console.log(elem, index, arr));
