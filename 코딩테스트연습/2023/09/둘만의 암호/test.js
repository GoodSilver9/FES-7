function solution(s, skip, index) {
  let arr = s.split("");
  let result = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  arr.map((item) => {
    let itemidx = alphabet.indexOf(item);
    let count = 0;
    for (let i = 0; i <= index; i++) {
      while (skip.includes(alphabet[(itemidx + i + count) % 26])) {
        count++;
        console.log(count);
      }
    }
    result.push(alphabet[(itemidx + count + index) % 26]);
  });
  console.log(result);
  return result.join("");
}

// solution("aukks", "wbqd", 5); //result "happy"
solution("zzzzzz", "abcdefghijklmnopqrstuvwxy", 6); //result "happy"

// a + 5 w b q d 제외
// 이제 한타임씩 상승시켜야되는데? for문을 쓰자
