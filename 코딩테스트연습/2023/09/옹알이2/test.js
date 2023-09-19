function solution(babbling) {
  let arr = [];
  let can = ["aya", "ye", "woo", "ma"];
  babbling.map((item) => {
    for (i = 0; i < can.length; i++) {
      if (item === can[i]) {
        arr.push(item);
      }
    }
  });
  console.log(arr);
  let closey = arr.length;
  return closey;
}

solution(["aya", "yee", "u", "maa"]); //result 1
