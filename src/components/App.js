import React, { useState, useEffect } from "react";
import "./stylesheets/App.scss";
import logo from "./images/starwarslogo.png";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/Api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

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

  //renderización del html
  return (
    <>
      <header>
        <img src={logo} alt="Star Wars" className="logo" />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <section className="section">
              <CharacterList dataList={characters} />
            </section>
          </Route>
          <Route
          //  path="/character/:characterId"
          //  render={renderCharacterDetail}
          ></Route>
        </Switch>
      </main>
    </>
  );
};
export default App;
