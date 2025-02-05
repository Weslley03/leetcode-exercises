/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const countMap = new Map();
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) +1);
    if(countMap.get(num) > nums.length / 2) {
      return num;
    }
  }
  return -1;
};


console.log(majorityElement([2,2,1,1,1,2,2]));