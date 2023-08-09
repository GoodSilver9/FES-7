function sm() {
  //   let answer = prompt("숫자를 하나입력해주세요");
  //   if (answer >= 18) {
  //     console.log("안녕하세요!");
  //   } else if (answer >= 10) {
  //     console.log("반가워 꼬마친구!");
  //   } else {
  //     console.log("부럽다...");
  //   }
  let answer = parseInt(prompt("성적을 입력력해라"));
  //   if (answer >= 90) {
  //     console.log("A");
  //   } else if (answer >= 80) {
  //     console.log("B");
  //   } else if (answer >= 70) {
  //     console.log("C");
  //   } else if (answer >= 60) {
  //     console.log("D");
  //   } else {
  //     console.log("강해져서 돌아와라");
  //   }

  //   const grade =
  //     answer >= 90
  //       ? console.log("A")
  //       : answer >= 80
  //       ? console.log("B")
  //       : answer >= 70
  //       ? console.log("C")
  //       : answer >= 60
  //       ? console.log("D")
  //       : console.log("강해져서돌아와라");

  switch (true) {
    case answer >= 90:
      console.log("A");
      break;
    case answer >= 80:
      console.log("B");
      break;
    case answer >= 70:
      console.log("C");
      break;
    case answer >= 60:
      console.log("D");
      break;
    default:
      console.log("강해져서 돌아와라");
  }
  //   let da = (answer>=90) ? "A"
}

sm();
