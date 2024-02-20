Array.prototype.myPush=function(val){
    const array=this;
    array[array.length]=val;
    return array.length
     
}
let arr=[1,2,4]
console.log(arr.myPush(5))
console.log(arr)