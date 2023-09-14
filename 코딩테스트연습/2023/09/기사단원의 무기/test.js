// function solution(number, limit, power) {
//   let arr1 = [];
//   for (i = 1; i <= number; i++) {
//     arr1.push(i);
//   }
//   let arr2 = [];
//   arr1.forEach((item) => {
//     let count = 0;
//     for (j = 1; j <= item; j++) {
//       if (item % j === 0) {
//         count++;
//       }
//     }
//     arr2.push(count);
//   });
//   let closey = arr2.map((item) => {
//     if (item > limit) {
//       return (item = power);
//     } else {
//       return item;
//     }
//   });
//   let answer = closey.reduce((a, b) => {
//     return a + b;
//   });
//   console.log(answer);
//   return answer;
// }

// solution(10, 3, 2); //result 10

//number는 array의 개수 전부다 1부터인가? ㅇ 그런듯 1부터 5까지네 for문

//limit는 array들의 약수가 limit 이상이면 power 로 바꾸기 replace?

function countDivisors(number) {
  const divisors = new Array(number + 1).fill(0);
  console.log(divisors);

  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      divisors[j]++;
    }
  }

  return divisors;
}

function solution(number, limit, power) {
  const divisors = countDivisors(number);
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    if (divisors[i] > limit) {
      answer += power;
    } else {
      answer += divisors[i];
    }
  }

  console.log(answer);
  return answer;
}

solution(10, 3, 2); //result 10
