// function solution(s, n) {
//   let arr = [];
//   let newarr = [];

//   for (i = 97; i <= 122; i++) {
//     let eng = String.fromCharCode(i);
//     arr.push(eng);
//   }
//   for (i = 65; i <= 90; i++) {
//     let eng = String.fromCharCode(i);
//     arr.push(eng);
//   }

//   let input = s.split("");

//   let closey = input.map((item) => {
//     if (item === " ") {
//       return " ";
//     }

//     let index = arr.indexOf(item);
//     let newIndex = (index + n) % arr.length;
//   });

//   let answer = closey.join("");
//   console.log(answer);
//   return answer;
// }

// solution("z", 1); // result BC

function solution(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === " ") {
      result += " ";
    }

    let code = s.charCodeAt(i);

    if (char >= "a" && char <= "z") {
      result += String.fromCharCode(((code - 97 + n) % 26) + 97);
    } else if (char >= "A" && char <= "Z") {
      result += String.fromCharCode(((code - 65 + n) % 26) + 65);
    }
  }

  console.log(result);
  return result;
}

solution("z", 1); // 출력: "a"
