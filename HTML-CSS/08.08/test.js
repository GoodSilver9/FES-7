let answer = 0;
let inputValue = 1234;
inputValue
  .toString()
  .split("")
  // 왜 a에 parseInt 안붙혀도 되는가
  .reduce((a, c) => a + parseInt(c), 0);

console.log(inputValue);

let arr = inputValue
  .toString()
  .split("")
  .reduce((a, c) => a + parseInt(c), 0);
console.log(arr);
