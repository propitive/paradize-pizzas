import facebookIcon from "../../images/icons/iconFacebook.png";
import emailIcon from "../../images/icons/iconEmail.png";

function Footer() {
  return (
    <footer className="footer">
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
          >
            <img
              className="footer__facebook"
              src={facebookIcon}
              alt="Facebook Icon"
            ></img>
          </a>
          <a
            href="https://github.com/propitive"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__email"
              src={emailIcon}
              alt="Email Icon"
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
    </footer>
  );
}

export default Footer;
