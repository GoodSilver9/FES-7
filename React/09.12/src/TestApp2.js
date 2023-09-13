import React, { useState } from "react";

const TestApp2 = () => {
  const [data, setData] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  const deleteHandler = (id) => {
    setData(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <>
      <ul>
        {data.map((item) => {
          return (
            <li>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <h3>{item.id}</h3>
              <button
                onClick={() => {
                  deleteHandler(item.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TestApp2;
