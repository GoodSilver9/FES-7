let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

input = input.map(Number);

function solution(unit1, card1, unit2, card2) {
  let arr = [];

  let answer = card2.map((item2) => {
    let counter = 0;
    return card1.reduce((v, item1) => {
      if (item1 === item2) {
        counter++;
      }
      return counter;
    });
  });
  console.log(answer);

  return answer;
}
solution(input);

solution(
  10,
  [6, 3, 2, 10, 10, 10, -10, -10, 7, 3],
  8,
  [10, 9, -5, 2, 3, 4, 5, -10]
);

// 4 는 나무의 개수 7은 필요한양
// for 문을써서 1씩 감소시켜보자 map 을써서

// 아니 필요한양이 7인데 어떻게 7로 구하지?
