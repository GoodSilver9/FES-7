function solution(n, m, section) {
  let arr = [];
  let result = [];
  let count = 0;
  for (i = 1; i <= n; i++) {
    arr.push(i);
  }

  section.forEach((item) => {
    if (!result.includes(item)) {
      arr.forEach((value) => {
        if (item === value) {
          count++;
          for (let j = item; j < item + m; j++) {
            result.push(j);
          }
        }
      });
    }
  });
  console.log(count);
  return count;
}

solution(4, 1, [1, 2, 3, 4]); //result 2

// 그러니까 [1,2,3,4,5,6,7,8] 중에서 2,3,6 을 칠해야되나
// 길이가 4개밖에 못칠하니까  2 부터 5까지 하고 아근데 뒤에서부터 하는게좋겠다
// 다음은 6부터 9까지 하겠지? 근데 9는없고

// sort 로 정렬하고? 근데 이미 정렬되있는거같은데 아무튼
// 0번째 index 부터 ? m 만큼 증가시켜서? slice 로 잘라네고 filter로 나머지를? 출력? 할까

//for 문을 써야될까 cnt 값을 올려야되는데 안써도되나

//splice 를 써야겠다
