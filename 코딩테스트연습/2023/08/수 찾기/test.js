let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr1 = input[1].split(" ").map(Number);
let arr2 = input[3].split(" ").map(Number);

function solution(arr1, arr2) {
  let closey = new Set(arr1);

  let answer = arr2.map((item) => {
    return closey.has(item) ? 1 : 0;
  });
  console.log(answer.join("\n"));
}

solution(arr1, arr2);
// solution([4, 1, 5, 2, 3], [1, 3, 7, 9, 5]);

// [4,1,5,2,3] , [1,3,7,9,5]
