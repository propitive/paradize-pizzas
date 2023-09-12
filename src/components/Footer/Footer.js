import facebookIcon from "../../images/icons/iconFacebook.png";
import emailIcon from "../../images/icons/iconEmail.png";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/propitive" target="_blank" rel="noreferrer">
        <img
          className="footer__facebook"
          src={facebookIcon}
          alt="Facebook Icon"
        ></img>
      </a>
      <a href="https://github.com/propitive" target="_blank" rel="noreferrer">
        <img className="footer__email" src={emailIcon} alt="Email Icon"></img>
      </a>
    </footer>
  );
}

export default Footer;
