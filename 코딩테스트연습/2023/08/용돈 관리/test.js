// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let [n, m] = input[0].split(" ").map(Number);
// let arr = [];
// for (i = 1; i < n + 2; i++) {
//   arr.push(i);
// }

function solution(countLimit, arr) {
  let counter = (mid) => {
    let cnt = 0;
    let remain = 0;
    for (let i = 0; i < countLimit; i++) {
      if (remain < arr[i]) {
        cnt++;
        remain = mid - arr[i];
      } else {
        remain -= arr[i];
      }
    }
    return cnt;
  };

  let left = Math.max(...arr);
  let right = 100000;
  let result = 0;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (counter(mid) > countLimit) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }
  console.log(result);
}

// solution(m, arr);
solution(5, [100, 400, 300, 100, 500, 101, 400]);
