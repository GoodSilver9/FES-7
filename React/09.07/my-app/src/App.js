import "./css/App.css";
import { useState } from "react";

function ColorToggleBox() {
  // 초기 상태를 설정합니다. 초기값은 true로 설정합니다.
  const [isBoxToggled, setBoxToggled] = useState(true);

  // 박스를 클릭할 때 호출되는 함수입니다.
  const toggleBoxColor = () => {
    // isBoxToggled 상태를 반전시킵니다.
    setBoxToggled(!isBoxToggled);
  };

  // 상태에 따라 박스의 배경색을 설정합니다.
  const boxStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: isBoxToggled ? "blue" : "red",
    cursor: "pointer",
  };

  return (
    <div style={boxStyle} onClick={toggleBoxColor}>
      클릭하여 색상 토글
    </div>
  );
}

function App() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1 style={{ color: "red" }}>년 : {year}</h1>
      <h2>
        월/일 : {month + 1}/{date}
      </h2>
      <h3>
        시간 : {hour}시 {min}분 {sec}초
      </h3>
      <ColorToggleBox />
    </div>
  );
}

export default App;
