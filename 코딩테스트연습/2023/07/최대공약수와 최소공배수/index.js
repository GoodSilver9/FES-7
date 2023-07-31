function solution(n, m) {
  let sum = [];
  for (i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      sum.push(i);
    }
  }

  sum.sort((a, b) => {
    return b - a;
  });
  let maximum = sum[0];

  let minimum = (n * m) / maximum;

  let answer = [maximum, minimum];
  return answer;
}

solution(2, 5); //result [3,12]
