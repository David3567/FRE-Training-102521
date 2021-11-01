Array.prototype.myReduce = function(callbackfn) {
    let value = this[0];
    
    for(let i =1  ; i<this.length; i++){
        
        value = callbackfn(value ,this[i]);
    }
    return value;
}
const arr = [175, 25, 50]
const result = arr.myReduce((acc, elem) => {
  return acc - elem
}) // *start the accumulator at 10 instead of 1*

console.log(result)