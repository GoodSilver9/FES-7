function solution(n, needs, arr1) {
  const [n, needs] = input
    .shift()
    .split(" ")
    .map((a) => +a);
  let arr1 = input.map((a) => +a).sort();
  let max = Math.max(...arr1);
  let min = 1;
  a;

  while (min <= max) {
    let mid = parseInt((max + min) / 2);
    let pieces = rr1
      .map((item) => {
        return parseInt(item / mid);
      })
      .reduce((a, b) => a + b, 0);

    if (pieces >= needs) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return max;
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const result = solution(n, needs, arr1);
console.log(result);

// solution(4, 11, [802, 743, 457, 539]);

// 4 는 나무의 개수 7은 필요한양
// for 문을써서 1씩 감소시켜보자 map 을써서

// 아니 필요한양이 7인데 어떻게 7로 구하지?
