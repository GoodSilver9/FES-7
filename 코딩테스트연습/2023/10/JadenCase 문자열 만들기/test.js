function solution(s) {
  let splity = s.split(" ");
  let filtery = splity.filter((item) => {
    if (item !== " ") {
      return item;
    }
  });
  let closey = filtery.map((item) => {
    let first = item[0].toUpperCase();
    let slicey = item.slice(1).toLowerCase();
    let modified = first + slicey;
    return modified;
  });
  let answer = closey.join(" ");
  console.log(answer);
  return answer;
}

solution("3people  unFollowed me 123"); //result "3people Unfollowed Me"
