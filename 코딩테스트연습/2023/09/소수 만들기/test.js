function solution(nums) {
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      for (z = j + 1; z < nums.length; z++) {
        if (isPrime(nums[i] + nums[j] + nums[z]) !== false) {
          count++;
        }
      }
    }
  }
  function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  console.log(count);
  return count;
}

solution([1, 2, 3, 4]); //result 1

// 그러니까 배열에서 3개를 선택해서 더하고 그게 소수가 되어야된다는거지 소수가되면? cnt 값이 오르고
