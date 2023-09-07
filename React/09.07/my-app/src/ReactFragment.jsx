import React from "react";

function ReactFragment() {
  const arr = [1, 2, 3, 4, 5];

  const items = [
    { id: 1, name: "Apple", desc: "빨간건 사과" },
    { id: 2, name: "Banana", desc: "바나나는 길어" },
    { id: 3, name: "Cherry", desc: "체리는 비싸" },
  ];

  const myArr = items.map((item) => {
    return (
      <React.Fragment key={item}>
        <p>{item.id}</p>
        <h1>{item.name}</h1>
        <p>{item.desc}</p>
      </React.Fragment>
    );
  });

  return (
    <>
      <h1>hello</h1>
      <h2>라이켓!!</h2>
      {myArr}
    </>
  );
}

export default ReactFragment;
