function solution(s) {
  let arr = s.split("");
  let newArr = [...arr];
  let cntArr = [0];
  let result = [];
  let cnt = 1;
  let i = 0;

  while (i < arr.length) {
    if (newArr[i] === newArr[i + 1]) {
      cnt++;
      if (cnt === cntArr[0]) {
        let splicey = newArr.splice(0, i + 1);
        result.push(splicey);
        cnt = 1;
        i = 0;
        cntArr = [0];
      }
      i++;
    } else {
      if (cnt === cntArr[0]) {
        let splicey = newArr.splice(0, i + 1);
        result.push(splicey);
        cnt = 1;
        i = 0;
        cntArr = [0];
      }
      if (cnt > cntArr[0]) {
        cntArr.unshift(cnt);
      }
      i++;

      cnt = 1;
    }
  }

  console.log(result);
  let answer = result.length;
  return answer;
}
solution("aaabbaccccabba");

// solution("banana"); //result 3

//result 그러니까 0번째 indx 와

// 그러니까 b 가 처음으로 시작하고 그다음 똑같은게 나오면 cnt 가 올라가고
// 다른글자가 나오면 이제 item 이 달라지고 cnt 가 같아질때까지 계속감
// 만약 끝까지 안같아지면 거기서 그냥 하나로 묶어
