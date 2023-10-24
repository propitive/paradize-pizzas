import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/paradizePizzasLogo.svg";
import Dropdown from "../Dropdown/Dropdown";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../../utils/constants";

function Header({ handleVisibleReset }) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const liMenuClassName = isDropdown
    ? "header__list-item-menu-hovered"
    : "header__list-item-menu";
  const showSidebar = () => setSidebar(!sidebar);

  const handleCloseOnOverlayClick = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
      showSidebar();
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
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
            <Link
              to="/gallery"
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <li
                className="header__list-item"
                onClick={() => handleVisibleReset}
              >
                GALLERY
              </li>
            </Link>
          </ul>
          <BookOnlineButton className="header__button" />
        </div>
        <div className="menu__container">
          <div className="navbar">
            <Link
              to="/"
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <img
                className="header__logo"
                src={logo}
                onClick={() => handleVisibleReset}
              />
            </Link>
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars
                style={{
                  color: "white",
                }}
                onClick={showSidebar}
              />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <div
              className={`nav-menu__backdrop ${
                sidebar ? "nav-menu__backdrop__open" : ""
              }`}
              onClick={handleCloseOnOverlayClick}
            ></div>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars" onClick={showSidebar}>
                  <AiIcons.AiOutlineClose
                    style={{
                      color: "white",
                    }}
                  />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <BookOnlineButton className=" nav-menu__button" />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
