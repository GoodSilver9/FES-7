// function solution(X, Y) {
//   let answer = [];
//   let transX = X.split("");
//   let transY = Y.split("");

//   for (let i = 0; i < transX.length; i++) {
//     for (let j = 0; j < transY.length; j++) {
//       if (transX[i] === transY[j]) {
//         answer.push(transX[i]);
//         transY.splice(j, 1);
//         break;
//       }
//     }
//   }
//   let answer2 = [...answer]
//     .sort((a, b) => {
//       return b - a;
//     })
//     .join("");

//   if (answer.length === 0) {
//     return "-1";
//   }

//   if (answer[0] === "0") {
//     return "0";
//   }

//   return answer2;
// }

// solution("5525", "1255");

function solution(X, Y) {
  let transX = X.split("");
  let transY = Y.split("");
  let answer = [];

  for (let i = 0; i < transX.length; i++) {
    let element = transX[i];
    let index = transY.indexOf(element);

    if (index !== -1) {
      answer.push(element);
      transY.splice(index, 1); // 중복된 요소를 제거
    }
  }

  if (answer.length === 0) {
    return "-1";
  }

  if (answer[0] === "0") {
    return "0";
  }

  // 정렬 및 문자열로 변환
  console.log(answer);
  return answer.sort((a, b) => b - a).join("");
}

solution("5525", "1255");
