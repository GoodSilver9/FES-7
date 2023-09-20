import React, { useRef, useState } from "react";

export default function App2() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const inputName = useRef(null);
  const inputId = useRef(null);

  function handlInputName(event) {
    setName(event.target.value);
    console.log("렌더링 - 1");
  }

  function handlInputId(event) {
    setId(event.target.value);
    console.log("렌더링 - 2");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newInfo = [...userInfo, { name, id }];
    setUserInfo(newInfo);
  }
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={handlInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          onChange={handlInputId}
          ref={inputId}
        />
      </form>
    </>
  );
}
