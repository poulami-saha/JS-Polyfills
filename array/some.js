Array.prototype.mySome= function(callback){
    const arr=this;
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            return true
        }
    }
    return false;
}

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.mySome(even));