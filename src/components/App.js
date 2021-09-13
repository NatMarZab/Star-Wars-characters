import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import logo from "../images/starwarslogo.png";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/Api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import OrderingButton from "./OrderingButton.js";

const App = () => {
  const [characters, setCharacters] = useState([]);
  //llamada a la API al cargar página
  useEffect(() => {
    if (characters.length === 0) {
      getDataFromApi().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  //funcion manejadora
  //const handleEvent = () =>
  const renderCharacterDetail = (routerProps) => {
    const routeCharacterName = routerProps.match.params.characterName;
    const characterFound = characters.find(
      (character) => character.name === routeCharacterName
    );
    return (
      <CharacterDetail specificCharacter={characterFound}></CharacterDetail>
    );
  };
  //renderización del html
  return (
    <>
      <header className="header">
        <img src={logo} alt="Star Wars" className="logo" />
      </header>
      <main>
        <section className="buttons">
          <OrderingButton variable={"nombre"} />
          <OrderingButton variable={"altura"} />
        </section>
        <Switch>
          <Route exact path="/">
            <section className="section">
              <CharacterList dataList={characters} />
            </section>
          </Route>
          <Route
            path="/character/:characterName"
            render={renderCharacterDetail}
          ></Route>
        </Switch>
      </main>
    </>
  );
};
export default App;
