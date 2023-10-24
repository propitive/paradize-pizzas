import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
            <p className="footer__text">Home</p>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">About</p>
          </Link>
          <Link
            to="/contact-form"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Contact Us</p>
          </Link>
          <Link
            to="/gallery"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Gallery</p>
          </Link>
          <div className="footer__icons">
            <a
              href="https://www.facebook.com/profile.php?id=100088328243988"
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
              href="mailto:lauramoorman22@gmail.com"
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
          <Link
            to="/menu/pizza"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Pizzas</p>
          </Link>
          <Link
            to="/menu/appetizer"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Appetizers</p>
          </Link>
          <Link
            to="/menu/salad"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Salads</p>
          </Link>
          <Link
            to="/menu/dessert"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Desserts</p>
          </Link>
          <Link
            to="/menu/pasta"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Pastas</p>
          </Link>
        </div>
        <div className="footer__column">
          <Link
            to="/contact-form"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__text">Contact</p>
          </Link>
        </div>
        <p className="footer__author">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/jose-m-maldonado/"
            target="_blank"
            rel="noreferrer"
            className="footer__author-a"
          >
            Jose Maldonado
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
