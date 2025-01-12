/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const roman_struct = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let result = 0;

  for(let i = 0; i < s.length; i++) {
    let atual_number = roman_struct[s[i]]
    let next_number = roman_struct[s[i+1]]

    if(next_number > atual_number) {
      result -= atual_number
    } else {
      result += atual_number
    }
  }
  
  return result; 
};

console.log(romanToInt('MCMXCIV'));