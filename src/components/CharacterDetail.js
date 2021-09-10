import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/layout/_characterDetail.scss";

const CharacterDetail = (props) => {
  return (
    <article className="characterArticle">
      <Link to="/" className="link">
        &gt;Volver
      </Link>
      <div className="stylesDetail">
        <div className="textInfo">
          <h4 className="characterTitle">{props.specificCharacter.name}</h4>
          <ul className="features">
            <li>Altura: {props.specificCharacter.species}</li>
            <li>Color de pelo: {props.specificCharacter.origin.name}</li>
            <li>Género: {props.specificCharacter.status}</li>
          </ul>
        </div>
      </div>
    </article>
  );
};
export default CharacterDetail;
