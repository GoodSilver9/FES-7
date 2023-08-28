function solution(n, arr1, arr2) {
  let newarr = [];
  let newarr2 = [];
  arr1.map((item) => {
    let secret = item.toString(2).split("");
    newarr.push(secret);

    if (secret.length < n) {
      secret.unshift(0);
    }
  });
  arr2.map((item) => {
    let secret = item.toString(2).split("");
    newarr2.push(secret);

    while (secret.length < n) {
      secret.unshift(0);
    }
  });

  function trans(item) {
    return item.map((row) => {
      return row.map((item) => {
        if (item === "0" || item === 0) {
          return " ";
        } else if (item === "1") {
          return "#";
        }
      });
    });
  }

  let closey = trans(newarr);
  let closey2 = trans(newarr2);

  let answer = [];
  for (i = 0; i < closey.length; i++) {
    let result = [];
    for (j = 0; j < n; j++) {
      if (closey[i][j] === "#" || closey2[i][j] === "#") {
        result.push("#");
      } else {
        result.push(" ");
      }
    }
    answer.push(result);
  }
  let answer2 = answer.map((item) => {
    return item.join("");
  });
  console.log(closey);
  console.log(closey2);
  return answer2;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

//result ["#####","# # #", "### #", "# ##", "#####"]
// 01001 = 9  , 10100 = 20
// 2^0 + 2^3 = 9 , 2^2 + 2^4 = 20
