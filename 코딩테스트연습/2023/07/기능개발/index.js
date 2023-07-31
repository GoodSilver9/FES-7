function solution(progresses, speeds) {
  var answer = [];
  var days = 0;

  while (progresses.length > 0) {
    days++;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      answer.push(days);
    }
  }
  console.log(answer);
  return answer;
}
solution([93, 30, 55], [1, 30, 5]); //result [2, 1]

// 근데나는 지금 [1,3,0] 이 됫어 1을 다지워버렷어
