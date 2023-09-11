import React, { useState } from "react";

const App2 = () => {
  const [message, setMessage] = useState("여기를 주목해주세요");

  const handleOnMouseEnter = () => {
    setMessage("안녕하새우");
  };
  const handleOnMouseLeave = () => {
    setMessage("안녕히가새우");
  };

  return (
    <div>
      <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        마우스를 올려보세요!!
      </p>
      <div>{message}</div>
    </div>
  );
};

export default App2;
