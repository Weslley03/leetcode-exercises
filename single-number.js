/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) {
      map.delete(nums[i])
    } else {
      map.set(nums[i])
    }
  }

  map = Array.from(map);
  return map[0][0];
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))