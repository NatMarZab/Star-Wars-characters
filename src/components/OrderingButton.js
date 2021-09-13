import React from "react";
import "../stylesheets/layout/orderingButton.scss";

const OrderingButton = (props) => {
  const handleClick = (ev) => {
    const keyWord = props.keyWord;
    return props.handleClick(ev, keyWord);
  };
  return (
    <button className="orderingButton" type="button" onClick={handleClick}>
      Ordenar por {props.criterion}
    </button>
  );
};

export default OrderingButton;
