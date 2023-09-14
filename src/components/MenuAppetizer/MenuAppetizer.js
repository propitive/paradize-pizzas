import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { menuOfAppetizers } from "../../utils/constants";
import MenuItem from "../MenuItem/MenuItem";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function MenuAppetizer() {
  return (
    <>
      <Header />
      <div className="menu-item">
        <h1 className="menu-item__title">Appetizers</h1>
        <h2 className="menu-item__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <BookOnlineButton className="menu-item__button" />
        <ul className="menu-item__ul">
          {menuOfAppetizers.map((appetizer) => {
            return (
              <MenuItem
                liClassName=""
                key={appetizer.id}
                image={appetizer.image}
                isPopular={appetizer.isPopular}
                name={appetizer.name}
                description={appetizer.description}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default MenuAppetizer;
