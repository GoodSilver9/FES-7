function solution(s) {
  let stack = [];
  for (let i of s) {
    if (stack.length > 0 && stack[stack.length - 1] === i) {
      stack.pop();
    } else {
      stack.push(i); // 스택에 문자 추가
    }
  }
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

solution("baabaa"); //result 1

// solution(cdcd); //result 0
