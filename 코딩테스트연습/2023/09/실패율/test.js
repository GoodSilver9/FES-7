function solution(N, stages) {
  let stageLength = stages.length;
  let arr1 = stages.sort((a, b) => {
    return a - b;
  });
  let countArr = [];

  for (let i = 1; i <= N; i++) {
    let cnt = 0;
    arr1.forEach((item) => {
      if (item === i) {
        cnt++;
      }
    });
    countArr.push(cnt);
  }

  let closey = countArr.map((item) => {
    if (item === 0) {
      return 0;
    }
    let result = item / stageLength;
    stageLength = stageLength - item;
    return result;
  });

  let answer = closey
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value)
    .map((item) => item.index + 1);
  console.log(answer);
  return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); //result [3,4,2,1,5]
