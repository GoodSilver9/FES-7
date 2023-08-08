function solution(times) {
  times.sort((a, b) => a[1] - b[1]);

  console.log(times);
  let result = [];
  let endTime = [];

  for (let i = 0; i < times.length; i++) {
    if (times[i][0] >= endTime) {
      endTime = times[i][1];
      result.push(times[i]);
    }
  }

  console.log(result);
}

solution([
  [1, 4],
  [3, 5],
  [0, 6],
  [5, 7],
  [3, 8],
  [5, 9],
  [6, 10],
  [8, 11],
  [8, 12],
  [2, 13],
  [12, 14],
]);
