import HelloProps from "./Components/HelloProps";
import Time from "./Components/Time";
import Display from "./Components/Display";
import ButtonBoxes from "./Components/ButtonBoxes";
import MenuList from "./Components/MenuList/MenuList";
import DisplayMoods from "./Components/DisplayMood/DisplayMoods";
import { useState } from "react";

function App() {
  const [currentMood, setCureentMood] = useState("");

  return (
    <div>
      <MenuList setCureentMood={setCureentMood} />
      <DisplayMoods />
    </div>
  );
}

export default App;
