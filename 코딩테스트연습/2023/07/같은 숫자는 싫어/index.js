function solution(arr) {
  let answer = [];

  for (i = 1; i <= arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      answer.push(arr[i - 1]);
    }
  }

  return answer;
}
solution([1, 1, 3, 3, 0, 1, 1]); //result [1,3,0,1]

// 근데나는 지금 [1,3,0] 이 됫어 1을 다지워버렷어
