function solution(numbers) {
  let result = [];

  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      let closey = numbers[i] + numbers[j];
      result.push(closey);
    }
  }
  let newarr = result.sort((a, b) => {
    return a - b;
  });
  let answer = [...new Set(newarr)];
  console.log(answer);
  return answer;
}

solution([2, 1, 3, 4, 1]); //result [2,3,4,5,6,7]
//그러니까 전체 다 더해서 숫자구하라는거아니야?
//3 5 6    2 7 4
// 아 여기서 중복을 빼는구나
