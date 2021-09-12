import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layout/characterDetail.scss";

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
            <li>Altura: {props.specificCharacter.height}</li>
            <li>Color de pelo: {props.specificCharacter.hair_color}</li>
            <li>Género: {props.specificCharacter.gender}</li>
          </ul>
        </div>
      </div>
    </article>
  );
};
export default CharacterDetail;
