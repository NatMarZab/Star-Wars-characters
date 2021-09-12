import React from "react";
import "../stylesheets/layout/orderingButton.scss";

const OrderingButton = (props) => {
  const handleClick = () => {
    props.handleClick();
  };
  return (
    <button className="orderingButton" type="button" onClick={handleClick}>
      Ordenar por {props.variable1}
    </button>
  );
};

export default OrderingButton;
