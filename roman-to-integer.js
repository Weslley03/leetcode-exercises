/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const roman_struct = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let count = 0;

  for(let i = 0;i < s.length; i++) {
    if(roman_struct[s[i]] < roman_struct[s[i+1]]) {
      //aqui, o count pode acabar ficando negativo, mas se a estrutura do 'roman_struct' estiver correta, não vai permanecer.
      count -= roman_struct[s[i]] 
    } else {
      count += roman_struct[s[i]]
    }
  }
  
  return count;
};

/* 
transform a roman number to integer

visando apenas uma iteração sobre o array, 
o algoritmo será O(n), dependendo apenas do tamanho do array

"MCMXCIV"
'm' é mais C caso for maior, se não é menos
*/

console.log(romanToInt("IV")); // 4
console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994