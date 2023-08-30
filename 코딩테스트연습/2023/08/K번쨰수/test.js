function solution(array, commands) {
  let answer = [];

  commands.map((item) => {
    let clsoey = array.slice(item[0] - 1, item[1]).sort((a, b) => {
      return a - b;
    });
    answer.push(clsoey[item[2] - 1]);
  });
  console.log(answer);
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);

//result [5,6,7]
// 아 그러니까 i=2 , j = 5 , k= 3 인게 i에서 j번째ㄱ까지 자르고 정렬후 k번째의 수를 구하라는말이네 그 k번째수를 answer 에 push
// 5 2 6 3
