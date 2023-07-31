function solution(price, money, count) {
  let sum = 0;
  let counter = 0;
  let answer = 0;

  for (i = price; i <= money; i = i + price) {
    sum += i;
    counter++;
    answer = sum - money;

    if (counter >= count) {
      break;
    }
  }
  return answer;
}

solution(3, 20, 4); //result 10

// 3 6 9 12
// for 문으로 하자
// money 20

function solution(price, money, count) {
  let sum = 0;
  let counter = 0;

  while (counter < count) {
    sum += price * (counter + 1);
    counter++;
  }

  let answer = Math.max(sum - money, 0);
  return answer;
}
