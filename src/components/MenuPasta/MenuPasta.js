import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuItem from "../MenuItem/MenuItem";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import { menuOfPastas } from "../../utils/constants";

function MenuPasta() {
  return (
    <>
      <Header />
      <div className="menu-item">
        <h1 className="menu-item__title">Pastas</h1>
        <h2 className="menu-item__subtitle">
          In the world of pasta, there are no problems, only solutions.
        </h2>
        <BookOnlineButton className="menu-item__button" />
        <ul className="menu-item__ul">
          {menuOfPastas.map((pasta) => {
            return (
              <MenuItem
                liClassName=""
                key={pasta.id}
                keyValue={pasta.id}
                image={pasta.image}
                isPopular={pasta.isPopular}
                name={pasta.name}
                description={pasta.description}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default MenuPasta;
