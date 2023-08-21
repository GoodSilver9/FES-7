function solution(n) {
  let result = [];

  while (n > 0) {
    let remain = n % 3;

    n = Math.floor(n / 3);
    result.push(remain);
  }

  let answer = 0;
  for (i = 0; i < result.length; i++) {
    answer += result[i] * 3 ** (result.length - 1 - i);
  }
  console.log(answer);
  return answer;
}

solution(45); // result 7

// 45를 3으로 나누면 몫은 15 나머지는 0
// 15를 3으로 나누면 몫은 5 나머지는 0
// 5를 3으로 나누면 몫은 1이고 나머지는 2
// 1을 3으로 나무녀 몫은 0이고 나머지는 1
// 그러니까 몫을 계속 3으로 나누고 나머지를 따로 추출해서 push 하면되겠네
// while 문으로 계속하면 될려나? 3진법?
