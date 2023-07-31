function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  let splity = s.split("").map(Number);
  let answer = splity.every(function (item) {
    return !isNaN(item);
  });
  return answer;
}
solution("1234"); //result false

// s는 길이 1이상 8이하인 문자열

// let answer = !isNaN(s);
// return answer;
