function solution(k, score) {
  let newscore = [...score];
  let answer = [];
  let newarr = [];

  while (newarr.length <= score.length - 1) {
    newarr.push(newscore[0]);
    newscore.shift();
    newarr.sort((a, b) => {
      return b - a;
    });
    let slicey = newarr.slice(0, k);
    let minimum = Math.min(...slicey);
    answer.push(minimum);
  }
  console.log(answer);
  return answer;
}

solution(3, [10, 100, 20, 150, 1, 100, 200]);
//result [10, 10, 10, 20, 20, 100, 100]
// 그러니까 3만큼의 배열길이에서 score 가 차례대로 담길때구나 slice 쓰면되나?
// slice 된값에서 계속 돌려서 최소 값을 push 하면될듯
// 아 shift로 계쏙 짤라와서 넣은값 sort 하는거였네

// let newscore = [...score];
// let newarr = [];
// let answer = [];
// for (let i = 0; i < score.length + 1; i++) {
//   if (newscore[0] === undefined) {
//     newscore.push(score[score.length - 1]);
//   }
//   if (newscore[0] < 7 && newscore[0] > 0) {
//     newscore.shift();
//     continue;
//   }
//   let arr = newscore.shift();
//   if (newarr.length >= k) {
//     newarr.shift();
//   }
//   newarr.push(arr);
//   let minimum = Math.min(...newarr);
//   answer.push(minimum);
// }
// console.log(answer);
// return answer;
