function solution(s) {
  let sorty = s.split(" ").sort((a, b) => {
    return a - b;
  });
  let answer = [sorty[0], sorty[sorty.length - 1]].join(" ");
  console.log(answer);
  return answer;
}

// solution("1 2 3 4"); // result "1 4"
solution("-1 -2 -3 -4"); // result "-4 -1"
