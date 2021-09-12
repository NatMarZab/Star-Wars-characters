import React from "react";
import CharacterPackage from "./CharacterPackage";
import "../stylesheets/layout/characterList.scss";

const CharacterList = (props) => {
  const charactersInfo = props.dataList.map((character) => {
    return (
      <li className="characterList-item">
        <CharacterPackage character={character} />
      </li>
    );
  });
  return <ul className="characterList">{charactersInfo}</ul>;
};
export default CharacterList;
