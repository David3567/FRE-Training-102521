Array.prototype.myReduce = function (...args) {
   let [acc, index] = args.length === 1
      ? [this[0], 1]
      : [args[1], 0];

   for (let i = index; i < this.length; i++) {
      acc = args[0](acc, this[i], i, this);
   }
   return acc;
}
const target = (a, b) => console.log(a + b);
const fn = limitedFn(1, target);
function limitedFn(num, cb) {
   console.log('fn called');
   let counter = num;
   return (...rest) => {

      if (counter > 0) {
         counter--;
         return cb(...rest);
      }
      else {
         return console.log('over limit');
      }
   }
}
fn(1, 2);
fn(2, 3);

