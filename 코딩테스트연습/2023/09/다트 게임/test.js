// function solution(dartResult) {
//   let result = [];

//   for (let i = 0; i < dartResult.length; i++) {
//     let score = 0;

//     if (!isNaN(dartResult[i])) {
//       score = dartResult[i];
//     } else if (dartResult[i] === "S") {
//       score = score;
//       result.push(score);
//     } else if (dartResult[i] === "D") {
//       score = score * score;
//       result.push(Math.pow(score, 2));
//     } else if (dartResult[i] === "T") {
//       score = score * score * score;
//       result.push(Math.pow(score, 3));
//     } else if (dartResult[i] === "*") {
//       score = score * 2;
//       result.push(score * 2);
//     } else if (dartResult[i] === "#") {
//       score = score * -1;
//     }
//   }
//   console.log(result);
// }

function solution(dartResult) {
  let result = [];
  let score = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      score = parseInt(dartResult[i]);

      if (!isNaN(dartResult[i + 1])) {
        score = score * 10 + parseInt(dartResult[i + 1]);
        i++;
      }
    } else if (dartResult[i] === "S") {
      result.push(score);
    } else if (dartResult[i] === "D") {
      score = score * score;
      result.push(score);
    } else if (dartResult[i] === "T") {
      score = score * score * score;
      result.push(score);
    } else if (dartResult[i] === "*") {
      score = score * 2;
      if (result.length > 1) {
        result[result.length - 2] *= 2;
      }
      result[result.length - 1] *= 2;
    } else if (dartResult[i] === "#") {
      result[result.length - 1] = -1 * result[result.length - 1];
    }
  }

  console.log(result);

  return result.reduce((a, b) => a + b);
}

solution("1T2D3D#"); // result 37

//설명 1** * 2 + 2** * 2 + 3***
