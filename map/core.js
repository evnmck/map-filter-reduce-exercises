function multiplyBy10 (array) {
 return array.map(el => {
     return el * 10;
 })
};

function shiftRight (array) {
 return array.map((el, index, arrays) => {
     return arrays.unshift(arrays.pop());
 })
 return array;
};

function onlyVowels (array) {
 // your code here
};

function doubleMatrix (array) {
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
