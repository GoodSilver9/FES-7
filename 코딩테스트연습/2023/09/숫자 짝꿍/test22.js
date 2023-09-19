function solution(X, Y) {
  let answer = [];
  let transX = X.split("");
  let transY = Y.split("");

  for (let element of transX) {
    let indexArr = transY.indexOf(element);
    if (indexArr !== -1) {
      answer.push(element);
      transY.splice(indexArr, 1);
    }
  }

  for (let element of answer) {
    let indexArr = transX.indexOf(element);
    if (indexArr !== -1) {
      transX.splice(indexArr, 1);
    }
  }
  let answer2 = [...answer]
    .sort((a, b) => {
      return b - a;
    })
    .join("");

  if (answer.length === 0) {
    return "-1";
  }

  if (answer[0] === "0") {
    return "0";
  }

  return answer2;
}

solution("100", "203045"); //result "-1"

//   let sorty = [...answer];
//   for (let i = 0; i < sorty.length; i++) {
//     if (sorty[i] === "0") {
//       sorty.splice(i, 1);
//       i--;
//     }
//   }
//   console.log(sorty);
//   if (sorty.length === 0) {
//     return "0";
//   }
