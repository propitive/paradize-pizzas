import { Link } from "react-router-dom";
import logo from "../../images/paradizePizzasLogo.svg";
import { menuNavItems } from "../../utils/constants";

function Header() {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
        <img className="header__logo" src={logo} />
      </Link>
      <ul className="header__list">
        <li className="header__list-item">MENU</li>
        <li className="header__list-item">ABOUT</li>
        <li className="header__list-item">CONTACT US</li>
        <li className="header__list-item">GALLERY</li>
      </ul>
      {/* <button className="header__button">BOOK ONLINE</button> */}
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
  );
}

export default Header;
