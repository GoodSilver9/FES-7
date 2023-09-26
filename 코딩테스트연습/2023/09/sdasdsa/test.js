function solution(arr, queries) {
  let answer = [];

  queries.map((item) => {
    let closey = arr.slice(item[0], item[1] + 1);
    closey.sort((a, b) => {
      return a - b;
    });
    let smallest = closey.find((element) => element > item[2]);
    if (smallest) {
      answer.push(smallest);
    } else {
      answer.push(-1);
    }
  });
  console.log(answer);
  return answer;
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
); //result [3,4,-1]

// 0<=4<=2
