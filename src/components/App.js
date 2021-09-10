import React, { useState, useEffect } from "react";
import "./stylesheets/App.css";
import logo from "./images/starwarslogo.png";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/Api";

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

  //renderización del html
  return (
    <>
      <header>
        <h1 className="title">Star Wars</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <section className="section">
              <p>probando que funciona</p>
            </section>
          </Route>
        </Switch>
      </main>
    </>
  );
};
export default App;
