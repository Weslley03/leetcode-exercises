/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let low = 0
  let high = x
  let mid = 0;

  while(low <= high) {
    mid = (low + high) / 2
    if((mid * mid) === x) return mid

    if((mid * mid) > x) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
   
  return Math.floor(mid);
};

console.log(mySqrt(12))