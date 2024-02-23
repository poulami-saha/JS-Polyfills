const car = {
  name: "Ferrari",
  color: "red",
};

function purchaseCar(currency, price) {
  console.log(
    `Mr.X bought ${this.color} ${this.name} car for ${currency}${price}`
  );
}

console.log(purchaseCar.apply(car, ["$", 500000]));

Function.prototype.myApply = function (context={}, args=[]) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }
  if(!Array.isArray(args)){
    throw new Error("CreateListFromArrayLike called on non-object")
  }
  context.fn = this;
  context.fn(...args);
};

console.log(purchaseCar.myApply(car, ["$", 500000]));
