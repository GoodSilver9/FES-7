const readline = require("readline");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const [num1, num2] = input.split(" ").map(Number);
const output = calculateOutput(num1, num2);

function calculateOutput(num1, num2) {
  let count = 0;

  while (num1 < num2) {
    num1 = num1 * 2;
    count++;
    if (num1 < num2) {
      num1 = parseInt(num1.toString() + "1");
      count++;
    }
  }

  return num1 === num2 ? count : -1;
}

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// 입력 받기
// rl.question("두 정수를 입력하세요 (예: 1 2): ", function (input) {
//   const [num1, num2] = input.split(" ").map(Number);
//   const output = calculateOutput(num1, num2);
//   console.log("출력값: ", output);

//   rl.close();
// });
