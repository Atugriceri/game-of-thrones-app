import React from "react";
import { Link } from "react-router-dom";

function Navbar (props) {
    console.log("Navbar:", props);
    const {
      themeReaction,
      theme: { currentTheme, bgColor, bgColorSecondary, textColor, btnColor, icon }
    } = props;

    return (
         <div>
            <nav className={`${bgColorSecondary} ${textColor} navbar navbar-expand-lg shadow-lg`}>
          <div className="container">
            <Link className={`navbar-brand ${textColor} fw-bolder`} to="/">Game of Thrones</Link>
            <button className={`btn ${btnColor} border-0 rounded-pill themeButton shadow`} onClick={themeReaction}><i class={`fas ${icon}`}></i></button>
              <div id="navbarNav">
                <ul className="nav">
                  <li className="nav-item">
                    <Link className={`nav-link ${textColor} fw-bold`} to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${textColor} fw-bold`} to="/characters">Characters</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar