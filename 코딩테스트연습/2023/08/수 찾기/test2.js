// 장성우
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let obj = input[1].split(' ').reduce((acc, cur) => {
  acc[cur] = (acc[cur] ?? 0) + 1;
  return acc;
}, {});

let answer = input[3].split(' ').map(v => !!obj[v] ? obj[v] : 0).join(' ');

console.log(answer);