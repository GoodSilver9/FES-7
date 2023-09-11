import React from "react";
import Feels from "./Feels";
import "../CSS/ButtonBoxes.css";

const ButtonBoxes = () => {
  const happy = [
    {
      feel: "좋아요!😀",
    },
    {
      feel: "정말 좋아요😀",
    },
    {
      feel: "최고에요!😀",
    },
    {
      feel: "미쳤어요!!😀",
    },
  ];

  return (
    <div className="box">
      <Feels happy={happy} />
    </div>
  );
};

export default ButtonBoxes;
