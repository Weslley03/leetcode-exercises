/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = '';

  function isPalin(s, left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    return s.slice(left+1, right)
  }

  for(let i = 0; i < s.length; i++) {

    let oddPalin = isPalin(s, i, i)
    let evenPalin = isPalin(s, i, i+1)

    let longestPalin = oddPalin.lenght > evenPalin.lenght ? oddPalin : evenPalin

    if(longestPalin.length > longest.length) {
      longest = longestPalin
    } 
  }
  return longest;
};

// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("SQQSYYSQQS"))