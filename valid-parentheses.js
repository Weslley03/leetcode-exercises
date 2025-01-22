/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const couples = [ '()', '[]', '{}' ]
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    stack.push(s[i])
    let pair = stack[stack.length - 2] + stack[stack.length - 1]
    if(couples.includes(pair)) {
      stack.pop()
      stack.pop()
    }
  }
  return stack.length === 0
};

/*
give an string 's' containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
no caso, se todos são um casal. 

'ab', 'cd', 'ef'
abcdefgi
(a, b) existe nos casais?
cdefgi
(c, d) existe nos casais?
efgi
(e, f) existe nos casais?
*/   

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("([])")); //true