function solution(s) {
  let arr = s.split(" ");
  let closey = [];
  let item = [];

  for (j = 0; j < arr.length; j++) {
    closey.push([arr[j]]);
  }

  for (i = 0; i < arr.length; i++) {
    let result = closey[i].join("");

    for (z = 0; z < result.length; z++) {
      if (z % 2 === 0) {
        item.push(result[z].toUpperCase());
      } else {
        item.push(result[z].toLowerCase());
      }
    }
    if (i !== arr.length - 1) {
      item.push(" ");
    }
  }

  let answer = item.join("");
  console.log(answer);
  return answer;
}

solution("try hello world"); // result TrY HeLlOWoRlD
//아 그러니까 [t,r,y], [h,e,l,l,e,o] 이렇고 보라는거네
