function solution(cards1, cards2, goal) {
  let result = [];
  let str2 = goal.join("");

  while (result.length !== str2.length) {
    if (cards1[0] === goal[0]) {
      result.push(cards1[0]);
      cards1.shift();
      goal.shift();
    } else if (cards2[0] === goal[0]) {
      result.push(cards2[0]);
      cards2.shift();
      goal.shift();
    } else {
      break;
    }
  }
  let str1 = result.join("");
  if (str1 === str2) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to", "juice"],
    ["i", "want", "to", "drink", "juice"]
  )
);
