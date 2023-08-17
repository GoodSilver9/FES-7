function addElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + addElements(arr.slice(1));
}

console.log(addElements([1, 2, 3, 4]));
