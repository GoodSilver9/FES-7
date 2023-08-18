let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr1 = input[1].split(" ").map(Number);
let arr2 = input[3].split(" ").map(Number);

// let arr1Set = new Set(arr1);

function solution(arr1, arr2) {
  let closey = arr2.map((item) => {
    if (arr1.has(item)) {
      return 1;
    } else {
      return 0;
    }
  });
  closey.forEach((item) => {
    console.log(item);
  });
}
solution(arr1, arr2);
