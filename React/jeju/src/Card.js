import React from "react";

const Card = (props) => {
  const url = "http://test.api.weniv.co.kr/" + props.goods.thumbnailImg;

  return (
    <li class="product-item">
      <div class="product-img">
        <img src={url} alt="" />
      </div>
      <strong class="product-name sl-ellipsis">
        {props.goods.productName}
      </strong>
      <button class="like-btn">버튼</button>
      <div class="product-price">
        <strong class="price m-price">
          {props.goods.price}
          <span>원</span>
        </strong>
      </div>
    </li>
  );
};

export default Card;
