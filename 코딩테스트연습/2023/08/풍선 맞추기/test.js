function solution(height, num2) {
  let count = 0;
  let remove = [];

  for (i = height; i >= 0; i--) {
    for (j = 0; j <= num2.length; j++) {
      if (num2[j] === i) {
        count++;
        num2.splice(j, 1);
        height--;
        for (z = 0; z < 5; z++) {
          if (num2[j + z] === height) {
            num2.splice(j + z, 1);
          }
        }
      }
    }
  }

  console.log(count);
}

solution(5, [2, 1, 5, 4, 3]);
