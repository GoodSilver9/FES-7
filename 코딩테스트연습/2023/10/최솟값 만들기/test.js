function solution(A, B) {
  let a = A.sort((a, b) => {
    return a - b;
  });
  let b = B.sort((a, b) => {
    return b - a;
  });
  let answer = 0;

  for (let i = 0; i < A.length; i++) {
    answer += a[i] * b[i];
  }
  console.log(answer);
  return answer;
}
solution([1, 4, 2], [5, 4, 4]); //reulst 29
