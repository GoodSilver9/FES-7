function solution(n, lost, reserve) {
  lost.sort((a, b) => {
    return a - b;
  });
  reserve.sort((a, b) => {
    return a - b;
  });

  let reserve2 = [...reserve];
  console.log(reserve2);
  lost = lost.filter((item) => {
    let found = false;

    for (let i = 0; i < reserve.length; i++) {
      if (item - 1 === reserve2[i] || item + 1 === reserve2[i]) {
        reserve2.splice(i, 1);
        found = true;
        break;
      }
    }
    if (found) {
      return false;
    } else {
      return true;
    }
  });

  console.log(lost);
  let answer = n - lost.length;
  console.log(answer);
  return answer;
}

solution(5, [2, 3, 5], [4, 2, 3]); // result 5
// solution(5, [2, 4], [1, 3, 5]); //result 5
// solution(5, [2, 4], [3]); // result 4

// 음 reserve 의 item 을돌려서 확인하고 남는 lost 배열을 n과 빼면 되지않을까?
