import React from "react";
import "../stylesheets/layout/orderingButton.scss";

const OrderingButton = (props) => {
  return (
    <button className="orderingButton" onClick={handleButton}>
      Ordenar por {props.variable1}
    </button>
  );
};

export default OrderingButton;
