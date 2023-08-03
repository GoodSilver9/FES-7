function add(x, y) {
  return x + y;
}

add(1, 2);
function sub(x, y) {
  return x - y;
}

function gop(x, y) {
  return x * y;
}
function nanu(x, y) {
  return x / y;
}

function stringToNumber(str) {
  let answer = parseInt(str.replaceAll(",", ""));
  return answer;
}

// 문제3: hello를 입력3번 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요
// 입력: world
// 출력: ['w','o','r','l','d']

function solution(world) {
  let answer = world.split("");
  return answer;
}

function printnum(a, b) {
  let answer = (a + b) * (a + b);
  return answer;
}
