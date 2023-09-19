function solution(lottos, win_nums) {
  let ctn = 0;
  let answer = [];
  let filtery = lottos.filter((item) => {
    return !win_nums.includes(item);
  });
  let closey = filtery.length + 1;

  filtery.forEach((element) => {
    if (element === 0) {
      ctn++;
    }
  });
  answer.push(closey - ctn);
  answer.push(closey);
  answer = answer.map((item) => {
    if (item > 6) {
      return 6;
    }
    return item;
  });

  console.log(answer);
  return answer;
}

solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]); // result [3, 5]

// 그러니까 6자리 배열에 서로 맞는것을 빼고?
// 이제 for문으로 0부터 max 까지 하는건가? 그건또 아닌거같은데 아닌가?
// for문으로 0 부터 집어넣어서 마지막까지 하고 겹치는게 있을때마다 cnt로 상승시키고 마지막에 push 하면 되나? 될지도 ?

// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6(낙첨)	그 외

// 지금 최소 2개가 맞고 0이 두개니까 4개까지 맞을수 있으므로 최대 - 3등 , 최소 - 5등

// 음? 그냥 0의 개수로 하면 되지않을까...? if 문으로다가?
// if 0이 두개면
