import React from "react";
import "./components/bootstrap/dist/css/bootstrap.min.css";
import "./components/bootstrap/dist/css/bootstrap.min.css";
import "./components/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CHARACTER_LIST from "./data/character_list";
import { iceTheme, fireTheme } from "./themes/iceAndFireTheme";
import Particles from "./components/Particles";

export default function App() {
  const [theme, setTheme] = React.useState(iceTheme);

  function themeReaction() {
    setTheme(theme.currentTheme === "primary" ? fireTheme : iceTheme);
  }

  const colSize = 3;

  const CharacterList = CHARACTER_LIST.map(item => (
    <div className={`col-sm-${colSize} mb-5 g-3`}>
      <Characters item={item} theme={theme} />
    </div>
  ));
  return (
    <Router>
      <Particles />
      <div className={`${theme.bgColor} ${theme.textColor}`}>
        <Navbar theme={theme} themeReaction={themeReaction} />
        <Switch>
          <Route path="/characters">
            <div className="container text-center">
              <div className="row mt-5">{CharacterList}</div>
            </div>
          </Route>
          <Route path="/">
            <div className="container text-center">
              <Home theme={theme} />
            </div>
          </Route>
        </Switch>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}
