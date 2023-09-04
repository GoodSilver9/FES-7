function solution(food) {
  let arr1 = [];
  let closey = [];
  for (i = 1; i < food.length; i++) {
    let item = Math.floor(food[i] / 2).toString();
    let newi = i.toString();
    closey.push(newi.repeat(item));
  }
  arr1 = closey.join("");
  let arr2 = [...arr1].reverse();
  let answer = [...arr1, 0, ...arr2].map(Number).join("");

  return answer;
}

solution([1, 7, 1, 2]);
//result "1223330333221"
//그러니까 food[0] 은 무조건 물이고
//result 에는 index 값이 들어가는거네
// input 으로 주는건 index 사용할수있는 개수이고 하지만 홀수이면 짝수로 바꾸면될듯?
//arr 1에는 나누기 몫을 삽입하고
// 지금 1이 3번 반복되어야되는데
// 3이 1번 반복되고있어
