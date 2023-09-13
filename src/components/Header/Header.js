import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/paradizePizzasLogo.svg";
import Dropdown from "../Dropdown/Dropdown";

function Header() {
  const [isDropdown, setIsDropdown] = useState(false);
  const liMenuClassName = isDropdown
    ? "header__list-item-menu-hovered"
    : "header__list-item-menu";

  return (
    <>
      {console.log(isDropdown)}
      <header className="header">
        <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
          <img className="header__logo" src={logo} />
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
          <li className="header__list-item">ABOUT</li>
          <li className="header__list-item">CONTACT US</li>
          <li className="header__list-item">GALLERY</li>
        </ul>
        <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
          <button className="header__button">
            BOOK ONLINE
            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
              <path
                clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </header>
    </>
  );
}

export default Header;
