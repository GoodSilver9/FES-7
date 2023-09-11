function solution(n) {
  let count = 0;

  for (i = 2; i <= n; i++) {
    if (isPrime(i) === true) {
      count++;
    }
  }

  function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(count);
  return count;
}

solution(10); // reuslt 4
// solution(5); // result 3

// 1부터 n 사이의 있는 소수 구하기
