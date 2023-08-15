// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// input = input.map(Number);

// solution(input);

function solution(unit, need, trees) {
  trees.sort((a, b) => {
    return a - b;
  });

  let start = 0;
  let end = trees[trees.length - 1];
  let answer = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let x of trees) {
      if (x > mid) sum += x - mid;
    }

    if (sum >= need) {
      if (mid > answer) answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}
console.log(solution(4, 7, [20, 15, 10, 17]));

// 4 는 나무의 개수 7은 필요한양
// for 문을써서 1씩 감소시켜보자 map 을써서

// 아니 필요한양이 7인데 어떻게 7로 구하지?
