function solution(a, b, n) {
  let result = 0;
  while (n >= a) {
    let cnt = Math.floor(n / a);
    let nam = n % a;
    n = nam + cnt * b;
    result += cnt * b;
  }
  return result;
}

solution(2, 1, 20);
//result 19
//그러니까  n을 a로 계속 해서 나누고 나눈값에 b를 곱하는거네

//계속해서 b를곱해서 나눈값을 a로 나누고
//근데 거기서 이제 + 값을찾는건데 나머지 + b를 곱한 값이네
// 받는병 = 나머지 +  값 * b를 곱한값
