import React from "react";
import "../stylesheets/layout/orderingButton.scss";

const OrderingButton = (props) => {
  const handleClick = (ev) => {
    props.handleClick();
  };
  return (
    <button className="orderingButton" type="button" onClick={handleClick}>
      Ordenar por {props.variable}
    </button>
  );
};

export default OrderingButton;
