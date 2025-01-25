/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  
  for(let i = digits.length -1; i >= 0;  i--) {
    digits[i]++
    if(digits[i] < 10) {
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits.unshift(1)
  return digits;
};

/*
nesse desafio, vamos receber um array de numeros e é preciso somar em 1, porem retornando ainda em array.

[1, 3, 4, 5]

preciso faxer um acrescimo no ultimo número
caso esse numero seja igual a 10, sinal de que é necessário aumentar uma casa anterior
se todos os elementos do array se tornarem 0, é necessário acrescentar '1' no inicio do array, 
*/

console.log(plusOne([1,2,3])); //124
console.log(plusOne([4,3,2,1])); // 4322 
console.log(plusOne([9])); //10