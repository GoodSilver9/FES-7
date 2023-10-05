import React from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
