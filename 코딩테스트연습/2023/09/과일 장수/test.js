function solution(k, m, score) {
  let result = [];
  let sorty = score.sort((a, b) => {
    return b - a;
  });
  for (i = 1; i <= score.length / m; i++) {
    result.push(sorty.slice(i * m - m, i * m));
  }
  let closey = result.map((array) => {
    let minimum = array[array.length - 1];
    return minimum * array.length;
  });
  if (closey.length > 0) {
    let answer = closey.reduce((a, b) => {
      return a + b;
    });

    console.log(answer);
    return answer;
  } else {
    return 0;
  }
}

solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]); //result 8

// k는 최대 점수 사과

// m 은 들어가는 개수

// sort 를 써서 뒤에부터 묶으면 될까? 뒤에부터 묶으면 [2,2,3,3]

// 최저 사과점수 * 한 상자에 담긴 사과 개수 * 상자의 개수

// 2  *  4 * 1  = 8

//배열끼리 묶어서 더하는거네

//[1,1,2] + [2,2,2] + [4,4,4] + [4,4,4] = 33
// 3      +    6    +    12   +   12
