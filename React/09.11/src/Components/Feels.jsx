import React from "react";
import "../CSS/Feel.css";

const Feels = (props) => {
  const feels = props.happy.map((item) => {
    return <div>기분이: {item.feel}</div>;
  });

  console.log(props);
  return <div className="main">{feels}</div>;
};

export default Feels;
