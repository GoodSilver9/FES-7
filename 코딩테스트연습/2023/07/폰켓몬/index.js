function solution(nums) {
  let lengthy = Math.floor(nums.length / 2);
  let newarr = nums.filter((item, index) => {
    return nums.indexOf(item) === index;
  });
  for (i = 0; i < lengthy && i < newarr.length; i++) {}

  return i;
}
solution([3, 3, 3, 2, 2, 2]); //result 2

// 아 그러니까 총 개수의 합 / 2 와 그 값으로 구하는거네?
// [3,3,3,2,2,4] 는 /2 하면 3이니까 세마리 대려갈수있는거고
// [3,3,3,2,2,2] 는 /2 하면 3이지만 종류가 두개밖에 없으므로 result 는 2
// indexOf로 중복값을 지워서 하면안되나?
// 자 이제 중복되지않는값을 담아야되요 indexof 로 지운다치고 일단 지워보자
