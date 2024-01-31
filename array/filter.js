const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

Array.prototype.myFilter = function (callback) {
  var output = [];
  const array = this;

  this.forEach((elem, index) => {
    if (callback(elem, index, array)) {
      output.push(elem);
    }
  });
  
  return output;
};

const arr = words.myFilter((word) => word.length > 6);
console.log(arr);
