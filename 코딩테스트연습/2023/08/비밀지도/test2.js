function solution(n, arr1, arr2) {
  let closey = [];

  for (i = 0; i < n; i++) {
    let answer = arr1[i] | arr2[i];
    let secret = answer.toString(2).split("");
    while (secret.length < n) {
      secret.unshift(0);
    }
    closey.push(secret);
  }
  let result = closey.map((row) => {
    return row
      .map((item) => {
        if (item === "1") {
          return (item = "#");
        } else {
          return (item = " ");
        }
      })
      .join("");
  });
  console.log(result);

  return result;
}
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);

// console.log((22 | 14).toString(2).split(""));

//  if (secret.length < n) {
//    secret.unshift(0);
//  }
