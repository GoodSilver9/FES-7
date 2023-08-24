function solution(number) {
  console.log(number);
  let count = 0;
  for (i = 0; i < number.length; i++) {
    for (j = i + 1; j < number.length; j++) {
      for (z = j + 1; z < number.length; z++) {
        if (number[i] + number[j] + number[z] === 0) {
          count++;
        }
      }
    }
  }
  console.log(count);
  return count;
}

solution([-2, 3, 0, 2, -5]); //result 2
// for문을 3개써서 0이 되게
