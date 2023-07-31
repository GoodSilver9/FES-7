function solution(arr1, arr2) {
  let sum = [];
  for (i = 0; i < arr1.length; i++) {
    let closey = [];
    for (j = 0; j < arr1[i].length; j++) {
      closey.push(arr1[i][j] + arr2[i][j]);
    }
    sum.push(closey);
  }
  return sum;
}
solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
); //result 10
