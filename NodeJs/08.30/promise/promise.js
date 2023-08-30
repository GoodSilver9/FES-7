function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("HELLOO!!!");
  });
}

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();

// sayHello()
//   .then((reSolveData) => {
//     console.log(reSolveData);
//     return reSolveData;
//   })
//   .then((reSolveData) => {
//     console.log(reSolveData);
//     return reSolveData;
//   })
//   .then((reSolveData) => {
//     console.log(reSolveData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
