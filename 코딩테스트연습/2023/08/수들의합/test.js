let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

input = input.map(Number);

solution(input);

function solution(num) {
  let sum = 0;
  let count = 0;
  let arr = [];

  for (i = 0; i < num; i++) {
    sum += i;
    count++;

    if (sum <= num) {
      arr.push(count);
    }
  }

  let answer = arr.length - 1;
  console.log(answer);
  return answer;
}
solution(200);
