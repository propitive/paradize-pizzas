import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { menuOfPizzas } from "../../utils/constants";
import Footer from "../Footer/Footer";
import MenuItem from "../MenuItem/MenuItem";

function MenuPizza({ handleShowMoreItems, handleVisibleReset, visible }) {
  useEffect(() => {
    handleVisibleReset();
  }, []);

  return (
    <>
      <Header />
      <div className="menu-pizza">
        <h1 className="menu-pizza__title">Oven Baked Pizzas</h1>
        <h2 className="menu-pizza__subtitle">
          Keep your friends close and your pizza closer.
        </h2>
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
        <ul className="menu-pizza__ul">
          {menuOfPizzas.slice(0, visible).map((pizza, i) => {
            return (
              <MenuItem
                liClassName=""
                key={pizza.id}
                image={pizza.image}
                isPopular={pizza.isPopular}
                name={pizza.name}
                description={pizza.description}
              />
            );
          })}
        </ul>
        {visible === 6 ? (
          <button
            className="menu-pizza__show-more"
            onClick={() => handleShowMoreItems(menuOfPizzas)}
          >
            Show More
          </button>
        ) : undefined}
        <p className="menu-pizza__advisory">
          *Gluten-free, rice flower, or cauliflower dough are available upon
          request*
        </p>
      </div>
      <Footer />
    </>
  );
}

export default MenuPizza;
