import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main className="main-content">
      <h1 className="main-content__title"> Connect with TopOfTheSpot</h1>
      <div className="main-content__container">
        <p className="main-content__description">
          Music obsession alert! Dive into a world of killer tracks, from breakout stars to legendary artists. 
          It's all free, its all TopOfTheSpot.
        </p>
        <p className="main-content__description">
          Explore a universe of captivating music, from artist that only has 3 fans to timeless legends. 
          The best part? It's completely free.
        </p>
        <Link to="/search">
          <button className="main-content__button-to-search">
          Spot some new music or hop back into current favorite!
          </button>
        </Link>

      </div>
      <div className="main-content__image-container">
        <img
          className="main-content__image"
          src={require("../../images/music_main.png")}
          alt="bloke listening to music"
        />
      </div>
    </main>
  );
}

export default Main;