function solution(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    let fivo = (arr[i - 2] + arr[i - 1]) % 1234567;
    arr.push(fivo);
  }
  return arr[n];
}
solution(3); //result 2
