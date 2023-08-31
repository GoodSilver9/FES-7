function solution(strings, n) {
  let closey = strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    }
    return a > b ? 1 : -1;
  });
  console.log(closey);
  return closey;
}

solution(["sun", "bed", "car"], 1); //result ["car,"bed,"sun"]

//  return a[n].localeCompare(b[n]);
