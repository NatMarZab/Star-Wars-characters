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

  //OPCIÓN 2:
  //const charactersOrderedList = props.characters.sort(function (characterA, characterB) {
  //  return ( characterA.name.toLowerCase().localeCompare(characterB.name.toLowerCase()));
  //  });

  return <ul className="orderedList">{orderedList}</ul>;
};
export default OrderedList;
