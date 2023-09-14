import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { menuOfPizzas } from "../../utils/constants";
import Footer from "../Footer/Footer";
import MenuItem from "../MenuItem/MenuItem";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

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
        <BookOnlineButton className="menu-pizza__button" />
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
