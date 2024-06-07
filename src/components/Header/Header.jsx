import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <img
          src={require("../../images/logoTopOfTheSpot.png")}
          alt="Logo v1"
          className="header-logo"
        />
        <Navigation />
      </div>

      <div className="header__line" aria-hidden="true"></div>
    </header>
  );
}

export default Header;