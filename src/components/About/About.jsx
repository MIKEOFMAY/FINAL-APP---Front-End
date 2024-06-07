import React from "react";
import "./About.css";

function About() {
  return (
    <main className="about">
      <h2 className="about__title"> About TopOfTheSpot </h2>
      <div className="about__wrap">
        <div className="about__description">
          <p className="about__description-text">
            TopOfTheSpot, Be on the loop of the Top Artists
          </p>
          <p className="about__description-text">
            With the assitance of advanced API, TopOfTheSpot allows you to:
          </p>
          <ul className="about__features">
            <li className="about__feature-item">
              <img
                src={require("../../images/music-note.png")}
                alt="Discover trending music hits. (Musical note icon)"
                className="about__icon"
              />
              <span className="about__feature-text">
                Discover trending music hits.
              </span>
            </li>
            <li className="about__feature-item">
              <img
                src={require("../../images/headphones.png")}
                alt="Play them instantly on Spotify. (Headphones icon)"
                className="about__icon"
              />
              <span className="about__feature-text">
                Play them instantly on Spotify.
              </span>
            </li>
            <li className="about__feature-item">
              <img
                src={require("../../images/book.png")}
                alt="View albums of your favorite artists. (Book icon)"
                className="about__icon"
              />
              <span className="about__feature-text">
              View albums of your favorite artists.
              </span>
            </li>
          </ul>
          <p className="about__description-text">
            Have any feedback? We here at TopOfTheSpot ALWAYS listen. 
          </p>
        </div>
        <img
          className="about__image"
          src={require("../../images/music_main.png")}
          alt="bloke listening to music"
        />
      </div>
    </main>
  );
}

export default About;