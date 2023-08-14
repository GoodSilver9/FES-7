// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// input = input.map(Number);

// solution(input);

function solution(unit, array, sum) {
  // unit으로 index값을 이용해? 1부터 unit 까지의 index를 배열로 만드는걸로

  array.sort((a, b) => {
    return a - b;
  });

  let summit = 0;

  //array 값 전부 더한값
  array.forEach((element) => {
    summit += element;
  });

  if (summit > sum) {
    let count = 0;
    let plus =
      (array[array.length - 2] + array[array.length - 1] - (summit - sum)) / 2;
    // 127 미만의 새로운 배열
    let newarr = array.map((item) => {
      if (item > plus) {
        return (item = Math.floor(plus));
      } else {
        return item;
      }
    });
    newarr.forEach((element) => {
      count += element;
    });
    if (count < sum) {
      return Math.floor(plus);
    }
  } else {
    return array[array.length - 1];
  }
}
// console.log(solution(4, [120, 110, 140, 150], 485));
console.log(solution(5, [70, 80, 30, 40, 100], 450));

// 4
// 120 110 140 150  전부 더하면 520 - 485 = 35  290 - 35 255 / 2 = 127
// 485
// 출력 127
// 지방의 수를 의미하는 첫째줄
// 두번째 줄은 각 지방의 예산을 요청을 표현하는 N개의 정수
// 총 예산을 나타내는 세번째줄

// 그러니까 최대 127 로 잡고 그 이상은 전부다 127
// 120 110 127 127 = 484 인데 가 되는것이다
// output 값이 127 인 이유는 세번째 총 485 이하 여야만 하므로 484 로 맞춘것이다

// if 문으로 전부 더햇을때 3번째 줄보다 커버리면? 그안에 또 if문으로 구해지게 만들어서 최대 허용값 출력

// if문으로  전부 더햇을때 3번째 줄보다 작으면? 두번째 줄에서 최댓값을 출력
