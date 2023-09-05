function solution(a, b) {
  let month = a - 1;
  let day = b;

  let date = new Date(2016, month, day);
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  console.log(date);
  let answer = week[date.getDay()];
  return answer;
}

solution(5, 24);
// result "TUE"
// SUN,MON,TUE,WED,THU,FRI,SAT
