import React from "react";
import CharacterPackage from "./CharacterPackage";
import "../stylesheets/layout/orderedList.scss";

const OrderedList = (props) => {
  //tengo dudas de si debo hacer un map primero para nombrar el "character"

  function sortParam(characterA, characterB) {
    if (characterA.name < characterB.name) {
      return -1;
    } else if (characterA > characterB) {
      return 1;
    } else {
      return 0;
    }
  }
  const orderedArray = props.characters.sort(sortParam);
  const orderedList = orderedArray.map((character) => {
    return (
      <li className="orderedList-item">
        <CharacterPackage character={character} />
      </li>
    );
  });
  console.log(orderedList);
  //OPCIÓN 2:
  //const charactersOrderedList = props.characters.sort(function (characterA, characterB) {
  //  return ( characterA.name.toLowerCase().localeCompare(characterB.name.toLowerCase()));
  //  });

  return <ul className="orderedList">{orderedList}</ul>;
};
export default OrderedList;
