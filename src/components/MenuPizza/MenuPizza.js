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
  const advisoryClassName =
    visible === 6 ? "menu-item__advisory" : "menu-item__advisory-show-more";

  return (
    <>
      <Header />
      <div className="menu-item">
        <h1 className="menu-item__title">Oven Baked Pizzas</h1>
        <h2 className="menu-item__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <BookOnlineButton className="menu-item__button" />
        <ul className="menu-item__ul">
          {menuOfPizzas.slice(0, visible).map((pizza) => {
            return (
              <MenuItem
                liClassName=""
                key={pizza.id}
                image={pizza.image}
                isPopular={pizza.isPopular}
                isSpecialRequest={pizza.isSpecialRequest}
                name={pizza.name}
                description={pizza.description}
              />
            );
          })}
        </ul>
        {visible === 6 ? (
          <button
            className="menu-item__show-more"
            onClick={() => handleShowMoreItems(menuOfPizzas)}
          >
            Show More
          </button>
        ) : undefined}
        <p className={advisoryClassName}>
          *Gluten-free, rice flower, or cauliflower dough are available upon
          request*
        </p>
      </div>
      <Footer />
    </>
  );
}

export default MenuPizza;
