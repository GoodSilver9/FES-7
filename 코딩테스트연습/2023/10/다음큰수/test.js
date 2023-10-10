function solution(n) {
  let answer = 0;
  let arr1 = n
    .toString(2)
    .split("")
    .filter((item) => {
      return item === "1";
    }).length;
  let result = n;
  while (answer === 0) {
    result++;
    let arr2 = result
      .toString(2)
      .split("")
      .filter((item) => {
        return item === "1";
      }).length;
    if (arr1 === arr2) {
      answer = result;
    }
  }
  return answer;
}

solution(78); //result 83
// solution(22); // result 23

// 78(1001110) 의 다음 큰숫자는 83(1010011)
