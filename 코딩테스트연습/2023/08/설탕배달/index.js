const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateOutput(num1, num2) {
  // num1 = 5 , num2 = [2,1,5,4,3]
  // for (i=num1;i<1;i-1)

  num2.forEach((item) => {
    if (item === num1) {
    }
  });

  let count = 0;

  return num2;
}

// 입력 받기
rl.question("두 정수를 입력하세요 : ", function (input) {
  const [num1, num2] = input.split(" ").map(Number);
  const output = calculateOutput(num1, num2);
  console.log("출력값: ", output);

  rl.close();
});
