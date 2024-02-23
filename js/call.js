const car = {
  name: "Ferrari",
  color: "red",
};

function purchaseCar(currency, price) {
  console.log(
    `Mr.X bought ${this.color} ${this.name} car for ${currency}${price}`
  );
}

console.log(purchaseCar.call(car, "$", 500000));

Function.prototype.myCall=function(context,...args){
    if(typeof this !=="function"){
        throw new Error("not callable")
    }
    context.fn=this;
    context.fn(...args)
}

console.log(purchaseCar.myCall(car, "$", 500000));