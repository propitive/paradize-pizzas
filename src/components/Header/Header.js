import logo from "../../images/paradizePizzasLogo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <ul className="header__list">
        <li className="header__list-item">MENU</li>
        <li className="header__list-item">ABOUT</li>
        <li className="header__list-item">CONTACT US</li>
        <li className="header__list-item">GALLERY</li>
      </ul>
      <button className="header__button">BOOK ONLINE</button>
    </header>
  );
}

export default Header;
