function solution(answers) {
  let a = [1, 2, 3, 4, 5];
  let resultA = a
    .join("")
    .repeat(answers.length / a.length + 1)
    .split("")
    .slice(0, answers.length)
    .map(Number);
  let cntA = 0;
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let resultB = b
    .join("")
    .repeat(answers.length / b.length + 1)
    .split("")
    .slice(0, answers.length)
    .map(Number);
  let cntB = 0;
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let resultC = c
    .join("")
    .repeat(answers.length / c.length + 1)
    .split("")
    .slice(0, answers.length)
    .map(Number);
  let cntC = 0;

  for (i = 0; i < answers.length; i++) {
    if (resultA[i] === answers[i]) {
      cntA++;
    }
    if (resultB[i] === answers[i]) {
      cntB++;
    }
    if (resultC[i] === answers[i]) {
      cntC++;
    }
  }
  let counts = [cntA, cntB, cntC];
  let maxCount = Math.max(...counts);
  let answer = [];

  counts.forEach((count, index) => {
    if (count === maxCount) {
      answer.push(index + 1);
    }
  });
  console.log(answer);
  return answer;
}

solution([1, 3, 2, 4, 2]); //result = [1]
