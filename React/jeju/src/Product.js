import React from "react";
import Card from "./Card";

const Product = (props) => {
  console.log(props);
  return (
    <main>
      <ul class="product-list">
        <Card goods={props.dataInProduct[0]} />
        <Card goods={props.dataInProduct[1]} />
        <Card goods={props.dataInProduct[2]} />
        <Card goods={props.dataInProduct[3]} />
        <Card goods={props.dataInProduct[4]} />
        <Card goods={props.dataInProduct[5]} />
        <Card goods={props.dataInProduct[6]} />
      </ul>
    </main>
  );
};

export default Product;
