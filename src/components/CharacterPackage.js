import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layout/characterPackage.scss";

const CharacterPackage = (props) => {
  return (
    <Link to={`/character/${props.character.name}`}>
      <article className="characterArticlePack">
        <h4 className="characterTitle">{props.character.name}</h4>
      </article>
    </Link>
  );
};
export default CharacterPackage;
