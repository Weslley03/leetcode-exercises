/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let first = 0
  let last = nums.length -1
  let passos = 0
  while(first <= last) {
    passos++
    let mid = Math.floor((first + last) / 2)

    if(nums[mid] === target) return mid
    
    if(nums[mid] < target) {
      first = mid + 1
    } else {
      last = mid - 1
    }
  
  } 
  return first
};

/*
given a sorted array of distinct integers and a target valu, return the index if the target is found. if not, 
return the index of where it would be if it were inserted in order.

array: 1,3,5,6]
target: 2

visando algoritmo O(log n), 
preciso de dois ponteiros e o meio

[1,3,5,6,5,5,5,5,5,5]
*/
console.log(searchInsert([7,3,5,6], 1))
console.log(searchInsert([1,3,5,6,7], 7))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 7))