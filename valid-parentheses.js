/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const parents = `() [] {}`;
  let i = 0;

  while(i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length -2]
    let closed = stack[stack.length -1]

    let pair = open + closed;
    if(parents.includes(pair)) {
      stack.pop()
      stack.pop()
    }
  };
  return stack.length === 0;
};

console.log(isValid('({(}})[}}{}}'));