function solution(d, budget) {
  d.sort((a, b) => {
    return a - b;
  });
  let closey = 0;

  let count = 0;
  for (i = 0; i < d.length; i++) {
    closey += d[i];

    if (closey <= budget) {
      count++;
    }
  }
  return count;
}

solution([1, 3, 2, 5, 4], 9); //result 3
