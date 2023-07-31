function solution(participant, completion) {
  let answer = [];
  let closey = [];

  participant.forEach((item) => {
    if (completion.includes(item) && !closey.includes(item)) {
      closey.push(item);
    } else if (!completion.includes(item)) {
      answer.push(item);
    }
  });

  console.log(answer);
  console.log(closey);

  return answer;
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]); //result 2

//

// const alreadyDeleted = [];

//   return participant.filter((item) => {
//     if (completion.includes(item)) {
//       if (!alreadyDeleted.includes(item)) {
//         alreadyDeleted.push(item);
//         return false;
//       } else {
//         return true;
//       }
//     }

//     return true;

//   if (participant.length > 100000) {
//     return false;
//   }
//   const already = [];
//   let answer = participant.filter((item) => {
//     if (completion.includes(item)) {
//       if (!already.includes(item)) {
//         already.push(item);
//         return false;
//       } else {
//         return true;
//       }
//     }
//     return true;
//   });
//   return answer.join("");
// }
