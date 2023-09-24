import { useState } from "react";
import facebookIcon from "../../images/icons/iconFacebook.svg";
import facebookIconHovered from "../../images/icons/iconFacebookHovered.svg";
import emailIcon from "../../images/icons/iconEmail.svg";
import emailIconHovered from "../../images/icons/iconMailHovered.svg";

function Footer() {
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isMailHovered, setIsMailHovered] = useState(false);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <p className="footer__text">Home</p>
          <p className="footer__text">About</p>
          <p className="footer__text">Contact Us</p>
          <p className="footer__text">Gallery</p>
          <div className="footer__icons">
            <a
              href="https://github.com/propitive"
              target="_blank"
              rel="noreferrer"
              className="footer__facebook"
            >
              <img
                className="footer__facebook"
                src={isFacebookHovered ? facebookIconHovered : facebookIcon}
                alt="Facebook Icon"
                onMouseEnter={() => setIsFacebookHovered(true)}
                onMouseLeave={() => setIsFacebookHovered(false)}
              ></img>
            </a>
            <a
              href="https://github.com/propitive"
              target="_blank"
              rel="noreferrer"
              className="footer__email"
            >
              <img
                className="footer__email"
                src={isMailHovered ? emailIconHovered : emailIcon}
                alt="Email Icon"
                onMouseEnter={() => setIsMailHovered(true)}
                onMouseLeave={() => setIsMailHovered(false)}
              ></img>
            </a>
          </div>
        </div>
        <div className="footer__column">
          <p className="footer__text">Pizzas</p>
          <p className="footer__text">Appetizers</p>
          <p className="footer__text">Salads</p>
          <p className="footer__text">Desserts</p>
          <p className="footer__text">Pastas</p>
        </div>
        <div className="footer__column">
          <p className="footer__text">Contact</p>
        </div>
        <p className="footer__author">Created by Jose Maldonado</p>
      </div>
    </footer>
  );
}

export default Footer;
