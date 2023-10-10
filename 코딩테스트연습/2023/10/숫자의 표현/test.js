function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = i; j <= n; j++) {
      count += j;
      if (count === n) {
        answer++;
        break;
      }
      if (count > n) {
        break;
      }
    }
  }
  console.log(answer);
  return answer;
}

solution(15); // result 4
