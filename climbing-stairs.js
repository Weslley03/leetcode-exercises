/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n <= 2) return n

  let preve1 = 1 
  let preve2 = 2

  for(let i = 3; i <= n; i++)  {
    let current = preve1 + preve2
    preve1 = preve2
    preve2 = current 
  }

  return preve2 
};

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(5))