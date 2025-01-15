/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 1
  for(let i = 0; i < nums.length -1; i++) {
    if(nums[i] !== nums[i+1]) {
      nums[index] = nums[i+1];
      index++
    }
  }
  return index; 
};

console.log(removeDuplicates([1,1,2]));

// const case01 = [1,1,2] //[1,2,_]
// const case02 = [0,0,1,1,1,2,2,3,3,4] //[0,1,2,3,4,_,_,_,_,_]
// console.log(removeDuplicates(case01));
// console.log(removeDuplicates(case02));