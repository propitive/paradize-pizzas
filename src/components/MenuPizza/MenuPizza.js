import Header from "../Header/Header";
import { menuOfPizzas } from "../../utils/constants";

function MenuPizza() {
  return (
    <>
      <Header />
      <div className="menu-pizza">
        <h1 className="menu-pizza__title">Oven Baked Pizzas</h1>
        <h2 className="menu-pizza__subtitle">
          “Keep your friends close and your pizza closer.” – Anonymous
        </h2>
        <button className="menu-pizza__button">
          BOOK ONLINE
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
        <ul className="menu-pizza__ul">
          {menuOfPizzas.map((pizza) => {
            {
              console.log(pizza);
            }
            return (
              <li className="menu-pizza__li">
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
      </div>
    </>
  );
}

export default MenuPizza;
