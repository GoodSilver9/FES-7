function solution(s) {
  let zeroCount = 0;
  let count = 0;
  while (s.length !== 1) {
    let arr = s.split("");
    let one = arr.filter((item) => {
      if (item === "1") {
        return item;
      } else {
        zeroCount++;
      }
    });
    let itemLength = one.length;
    count++;
    s = itemLength.toString(2);
  }
  let answer = [count, zeroCount];
  return answer;
}

solution("110010101001"); //result [3,8]
