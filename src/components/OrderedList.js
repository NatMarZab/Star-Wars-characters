import React from "react";
import CharacterPackage from "./CharacterPackage";
import "../stylesheets/layout/characterList.scss";

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
      <li className="characterList-item">
        <CharacterPackage character={character} />
      </li>
    );
  });
  //OPCIÓN 2:
  //const charactersOrderedList = props.characters.sort(function (characterA, characterB) {
  //  return ( characterA.name.toLowerCase().localeCompare(characterB.name.toLowerCase()));
  //  });

  return <ul className="characterList">{charactersInfo}</ul>;
};
export default OrderedList;
