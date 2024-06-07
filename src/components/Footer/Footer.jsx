import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const symbol = String.fromCharCode(169);

  return (
    <footer className="footer">
      <div className="footer__social-media">
        <a
          href="https://github.com/MIKEOFMAY/FINAL-APP---Front-End"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer__logos"
            src={require("../../images/github.png")}
            alt="Logo github"
          />
        </a>
        <a
          href="" /*insert your linkedIn https*/
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer__logos"
            src={require("../../images/linkedin.png")}
            alt="Logo Linkedin"
          />
        </a>
      </div>
      <p className="footer__copyright">
        {` ${symbol} ${year} Mike `}
      </p>
    </footer>
  );
};

export default Footer;