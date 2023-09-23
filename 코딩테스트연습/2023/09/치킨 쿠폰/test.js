// function solution(chicken) {
//   let coupon;
//   let count = 0;

//   while (parseInt(coupon) !== 0) {
//     count += chicken / 10;
//     coupon = chicken / 10;
//     chicken = chicken / 10;
//     console.log(count);
//   }
//   return parseInt(count);
// }

// solution(1081); //result 120

function solution(chicken) {
  var answer = 0;
  let coupon = 0;

  while (chicken >= 10) {
    if (chicken >= 10) {
      chicken -= 10;
      coupon++;
      answer++;
    }
    if (coupon >= 10) {
      coupon = coupon - 10;
      coupon++;
      answer++;
    }
  }

  console.log(answer);
  return answer;
}
solution(1081); //result 120
