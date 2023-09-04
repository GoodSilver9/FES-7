// function solution(s) {
//   let arr1 = [];
//   let arr2 = [];
//   let newarr = s.split("");

//   for (let i = 0; i < newarr.length; i++) {
//     arr1.push(newarr[i]);
//     if (arr1.slice(0, arr1.length - 1).includes(newarr[i])) {
//       let first = arr1.indexOf(newarr[i]);
//       arr2.push(i - first);
//     } else {
//       arr2.push(-1);
//     }
//     // console.log(arr1);
//   }
//   console.log(arr2);
//   return arr2;
// }
//result [-1,-1,-1,2,2,2]

function solution(s) {
  let arr1 = [];
  let arr2 = [];
  let newarr = s.split("");

  for (let i = 0; i < newarr.length; i++) {
    let idx = newarr[i];
    arr1.push(idx);
    let lastIndex = arr1.slice(0, i).lastIndexOf(idx);
    console.log(lastIndex);

    if (lastIndex !== -1) {
      arr2.push(i - lastIndex);
    } else {
      arr2.push(-1);
    }
  }
  return arr2;
}

solution("banana");
