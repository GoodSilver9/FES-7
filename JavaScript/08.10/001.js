const person = {
  name: "재현",
  age: 20,
  gender: "male",
};
console.log(Object.keys(person));

const props = Object.keys(person);

for (let i = 0; i < props.length; i++) {
  console.log(`key : ${props[i]} , value : ${person[props[i]]} `);
}
z;
