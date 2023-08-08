const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const times = input.slice(1).map((line) => line.split(" ").map(Number));
  const output = solution(times);
});

function solution(times) {
  times.sort((a, b) => a[1] - b[1]);

  console.log(times);
  let result = [];
  let endTime = 0;

  for (let i = 0; i < times.length; i++) {
    if (times[i][0] >= endTime) {
      endTime = times[i][1];
      result.push(times[i]);
    }
  }

  console.log(result);
  return result;
}
