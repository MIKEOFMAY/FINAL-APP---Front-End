import React, { useState, useEffect, useRef } from "react";
import { NavLink, useMatch } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const matchInicio = useMatch("/");
  const matchArtista = useMatch("/search");
  const matchAbout = useMatch("/about");

  const [isOpen, setIsOpen] = useState(false);
  const navListRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        navListRef.current &&
        !navListRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <nav className="navigation">
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        ref={hamburgerRef}
      >
        ☰
      </button>
      <ul
        className={`navigation__list ${isOpen ? "open" : ""}`}
        ref={navListRef}
      >
        <li className="navigation__item">
          <NavLink
            to="/"
            className={`navigation__link ${
              matchInicio ? "navigation__list--active" : ""
            }`}
          >
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/search"
            className={`navigation__link ${
              matchArtista ? "navigation__list--active" : ""
            }`}
          >
            Spot the Artist
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/about"
            className={`navigation__link ${
              matchAbout ? "navigation__list--active" : ""
            }`}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;