import React from "react";
import CharacterPackage from "./CharacterCard";
import "../stylesheet/layout/characterList.scss";

const CharacterList = (props) => {
  const charactersInfo = props.dataList.map((character) => {
    return (
      <li /*key={character.id}*/ className="characterList-item">
        <CharacterPackage character={character} />
      </li>
    );
  });
  return <ul className="characterList">{charactersInfo}</ul>;
};
export default CharacterList;
