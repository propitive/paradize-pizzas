import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { menuOfAppetizers } from "../../utils/constants";

function MenuAppetizer() {
  return (
    <>
      <Header />
      <div>
        <h1></h1>
        <h2></h2>
        <button className="menu-pizza__button">
          BOOK ONLINE
          <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <ul className="menu-pizza__ul">
        {menuOfAppetizers.map((pizza, i) => {
          return (
            <li className="menu-pizza__li" key={i}>
              <img className="menu-pizza__image" src={pizza.image} />
              <div className="menu-pizza__text">
                {pizza.isPopular === true ? (
                  <button className="menu-pizza__popular">POPULAR</button>
                ) : undefined}
                <h3 className="menu-pizza__name">{pizza.name}</h3>
                <p className="menu-pizza__description">{pizza.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <Footer />
    </>
  );
}

export default MenuAppetizer;
