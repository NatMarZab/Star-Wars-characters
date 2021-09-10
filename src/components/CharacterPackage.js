import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/layout/_characterCard.scss";

const CharacterPackage = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <article className="characterArticlePack">
        <h4 className="characterTitle">{props.character.name}</h4>
      </article>
    </Link>
  );
};
export default CharacterPackage;
