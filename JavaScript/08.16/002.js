let obj = { one: 1, two: 2 };
let myNum = obj.one;
console.log(myNum);

let obj2 = { one: 1, two: 2 };
let { two: Num } = obj2;
console.log(Num);

let { one: myNum2 } = { one: 1 };
const number = { one: 1 };
number.one;

```jsx
/**
let food1, food2, food3;

const categories = {food1 : '과일', food2 : '채소', food3 : '육류'};

food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;
*/

const {food1, food2, food3} = {food1 : '과일', food2 : '채소', food3 : '육류'};

console.log(food1, food2, food3);
```;
