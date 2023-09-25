function solution(keymap, targets) {
  let newKeymap = [...keymap].join("").split("");
  let arr = [];
  targets.map((item) => {
    let count = 0;
    for (let i = 0; i < item.length; i++) {
      for (let j = 0; j < newKeymap.length; j++) {
        if (item[i] === keymap[0][j] || item[i] === keymap[1][j]) {
          count += j + 1;
          break;
        }
      }
      if (count === 0) {
        arr.push(-1);
      }
    }
    arr.push(count);
  });
  console.log(arr);
  return arr;
}

solution(["AA"], ["B"]); //result [4,6]
solution(["AGZ", "BSSS"], ["ASA", "BGZ"]); //result [4,6]

// 쉬운거같은데? for문으로  같이 돌려버리면 되지않나? || 을써서?
