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
  const handleClick = (ev, keyWord) => {
    if (keyWord === "name") {
      //PLAN A, para el nombre; tengo dudas de si debo hacer un map primero para nombrar el "character"
      function compareNameParam(characterA, characterB) {
        if (characterA.name < characterB.name) {
          return -1;
        } else if (characterA.name > characterB.name) {
          return 1;
        } else {
          return 0;
        }
      }
      const orderedArrayByName = [...characters].sort(compareNameParam);
      //PLAN B:
      //const orderedArrayByName = characters.sort(a, b) => a.name.localeCompare(b.name);
      console.log("Name", orderedArrayByName);
      return setCharacters(orderedArrayByName);
    } else if (keyWord === "height") {
      const orderedArrayByHeight = [...characters].sort(function (a, b) {
        //console.log(a.height, b.height)
        return parseInt(a.height) - parseInt(b.height);
      });
      console.log("Altura", characters);

      return setCharacters(orderedArrayByHeight);
    }
  };

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
          <OrderingButton
            criterion={"nombre"}
            keyWord={"name"}
            handleClick={handleClick}
          />
          <OrderingButton
            criterion={"altura"}
            keyWord={"height"}
            handleClick={handleClick}
          />
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
