import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/paradizePizzasLogo.svg";
import Dropdown from "../Dropdown/Dropdown";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function Header({ handleVisibleReset }) {
  const [isDropdown, setIsDropdown] = useState(false);
  const liMenuClassName = isDropdown
    ? "header__list-item-menu-hovered"
    : "header__list-item-menu";

  return (
    <>
      <header className="header">
        <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
          <img
            className="header__logo"
            src={logo}
            onClick={() => handleVisibleReset}
          />
        </Link>
        <ul className="header__list">
          <li
            className={liMenuClassName}
            onMouseEnter={() => setIsDropdown(true)}
            onMouseLeave={() => setIsDropdown(false)}
          >
            MENU
            {isDropdown && <Dropdown />}
          </li>
          <Link
            to="/about"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <li
              className="header__list-item"
              onClick={() => handleVisibleReset}
            >
              ABOUT
            </li>
          </Link>
          <Link
            to="/contact-form"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <li
              className="header__list-item"
              onClick={() => handleVisibleReset}
            >
              CONTACT US
            </li>
          </Link>
          <li className="header__list-item" onClick={() => handleVisibleReset}>
            GALLERY
          </li>
        </ul>
        <Link
          to="/contact-form"
          style={{ textDecoration: "none", alignSelf: "center" }}
        >
          <BookOnlineButton className="header__button" />
        </Link>
      </header>
    </>
  );
}

export default Header;
