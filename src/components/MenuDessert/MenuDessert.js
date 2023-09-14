import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuItem from "../MenuItem/MenuItem";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import { menuOfDesserts } from "../../utils/constants";

function MenuDessert() {
  return (
    <>
      <Header />
      <div className="menu-item">
        <h1 className="menu-item__title">Oven Baked Pizzas</h1>
        <h2 className="menu-item__subtitle">
          Keep your friends close and your pizza closer.
        </h2>
        <BookOnlineButton className="menu-item__button" />
        <ul className="menu-item__ul">
          {menuOfDesserts.map((dessert) => {
            return (
              <MenuItem
                liClassName=""
                key={dessert.id}
                image={dessert.image}
                isPopular={dessert.isPopular}
                name={dessert.name}
                description={dessert.description}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default MenuDessert;
