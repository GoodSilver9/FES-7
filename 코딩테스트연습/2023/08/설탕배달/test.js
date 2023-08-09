let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

input = input.map(Number);

solution(input[0]);

function solution(num) {
  let sum = 0;
  let arr = [];
  let closey = 0;
  for (i = 0; i < num; i++) {
    sum = num - i * 5;

    for (j = 0; j < num; j++) {
      let remain = sum - j * 3;

      if (remain === 0) {
        arr.push(i, j);
      }
    }
  }

  closey = arr[arr.length - 1] + arr[arr.length - 2];

  let answer = !isNaN(closey) ? closey : -1;

  console.log(answer);

  return answer;
}

// solution(7); // result  4

// 3킬로와 5킬로 짜리가 있다
// 이걸.. 어떻게 방법을 구상할까 ... 흠...
// 최소공배수는 15잖아 그거랑은 관련 없는거 같은데...
// 짝수일때일까? for문을 쓰는 거일려나? 아 그런가 이중 for문을써서 5먼저 하면될려나.
