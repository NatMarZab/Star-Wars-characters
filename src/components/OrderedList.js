import React from "react";
import CharacterPackage from "./CharacterPackage";
import "../stylesheets/layout/orderedList.scss";

const OrderedList = (props) => {
  const orderedList = orderedArray.map((character) => {
    return (
      <li className="orderedList-item">
        <CharacterPackage character={character} />
      </li>
    );
  });
  return <ul className="orderedList">{orderedList}</ul>;
};
export default OrderedList;
