import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuItem from "../MenuItem/MenuItem";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import { menuOfSalads } from "../../utils/constants";

function MenuSalad() {
  return (
    <>
      <Header />
      <div className="menu-item">
        <h1 className="menu-item__title">Salads</h1>
        <h2 className="menu-item__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <BookOnlineButton className="menu-item__button" />
        <ul className="menu-item__ul">
          {menuOfSalads.map((salad) => {
            return (
              <MenuItem
                liClassName=""
                key={salad.id}
                keyValue={salad.id}
                image={salad.image}
                isPopular={salad.isPopular}
                name={salad.name}
                description={salad.description}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default MenuSalad;
