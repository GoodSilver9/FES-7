function solution(sizes) {
  let garo = [];
  let sero = [];
  let arr = sizes.map((item) => {
    if (item[0] < item[1]) {
      return [item[1], item[0]];
    } else {
      return [item[0], item[1]];
    }
  });
  let maxArr = arr.map((item) => {
    garo.push(item[0]);
    sero.push(item[1]);
  });
  garo.sort((a, b) => {
    return a - b;
  });
  sero.sort((a, b) => {
    return a - b;
  });
  let maxGaro = garo[garo.length - 1];
  let maxSero = sero[sero.length - 1];
  let answer = 0;
  answer = maxGaro * maxSero;
  return answer;
}

solution([60, 50], [30, 70], [60, 30], [80, 40]); //result 4000

// 1번째 가로길이와 2번째 세로길이중 제일 긴거를 뽑아서 서로 곱한다
//하지만 세로길이 제일 긴놈이 가로길이 보다짧고 가로길이가 지금껏 나온 세로길이 보다 짧으면 ㄱㅊ
