/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for(let i=0; i < haystack.length;i++) {
    if(haystack[i] === needle[0]) {
      const sub = haystack.substring(i, i+needle.length)
      if(sub === needle) return i
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))