import React, { useState } from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { countState } from "./recoil/atom";

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

function DisplayCounter() {
  const [count] = useRecoilState(countState);

  return <div>{count}</div>;
}

const App = () => {
  return (
    <div>
      <Counter />
      <DisplayCounter />
    </div>
  );
};

export default App;
