const 과일들 = ["사과", "파인애플", "수박"];
const 생선들 = ["고등어", "갈치", "붕어"];
const 합치면 = [...과일들, ...생선들];

과일들.push("키위");

const 위니브 = { 게리: 1, 빙키: 2 };
const 위니브2 = { 라이캣: 3 };
const 위니브3 = { ...위니브, ...위니브2 };

const me = { name: "재현", address: "제주" };

const clonedMe = { ...me };

clonedMe.age = 22;

console.log(`${Object.keys(me)} & ${Object.keys(clonedMe)}`);
