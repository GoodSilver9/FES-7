function solution(name, yearning, photo) {
  let closey = photo.map((item) => {
    return item.map((element) => {
      if (name.indexOf(element) !== -1) {
        let idx = name.indexOf(element);
        return yearning[idx];
      } else {
        return 0;
      }
    });
  });
  let sum = closey.map((item) => {
    return item.reduce((a, b) => {
      return a + b;
    });
  });
  console.log(sum);
  return sum;
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);

//result [19,15,6]
