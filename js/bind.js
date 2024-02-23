const car = {
  name: "Ferrari",
  color: "red",
};

function purchaseCar(currency, price) {
  console.log(
    `Mr.X bought ${this.color} ${this.name} car for ${currency}${price}`
  );
}

Function.prototype.myBind = function (context, args) {
  if (typeof this !== "function") {
    throw new Error("Not callable");
  }
  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar.bind(car);
console.log(newFunc("$", "50000"));
