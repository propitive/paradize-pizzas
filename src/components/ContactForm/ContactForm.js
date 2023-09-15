import { useState } from "react";
import Header from "../Header/Header";
import { menuOfPizzas } from "../../utils/constants";

function ContactForm() {
  const [pizzaValue, setPizzaValue] = useState("");
  const onPizzaChange = (event) => {
    // console.log(event.target.value);
    setPizzaValue(event.target.value);
  };
  const onPizzaSearch = (searchTerm) => {
    setPizzaValue(searchTerm);
  };

  return (
    <>
      <Header />
      <form className="form">
        <div className="form__input-box">
          <input className="form__input" required />
          <span className="form__input-span">Full Name</span>
        </div>
        <div className="form__input-box">
          <input className="form__input" required />
          <span className="form__input-span">Email</span>
        </div>
        <div className="form__input-box">
          <input className="form__input" type="number" min="25" required />
          <span className="form__input-span">Expected Attendance</span>
        </div>
        <div className="form__input-box">
          <input className="form__input" required />
          <span className="form__input-span">Location</span>
        </div>
        <div className="form__input-box">
          <input
            className="form__input"
            value={pizzaValue}
            onChange={onPizzaChange}
            required
          />
          <span className="form__input-span">Pizzas</span>
          <div className="form__dropdown">
            {menuOfPizzas
              .filter((pizza) => {
                //     // console.log(pizza);
                //     // console.log(pizzaValue);
                //     // console.log(event.target.value);
                const searchTerm = pizzaValue.toLowerCase();
                const pizzaName = pizza.name.toLowerCase();
                console.log("searchTerm: " + searchTerm);
                console.log("pizzaName: " + pizzaName);
                return (
                  searchTerm &&
                  pizzaName.startsWith(searchTerm) &&
                  pizzaName !== searchTerm
                );
              })
              .map((pizza) => (
                <div
                  className="form__dropdown-row"
                  onClick={() => onPizzaSearch(pizza.name)}
                  key={pizza.id}
                >
                  {pizza.name}
                </div>
              ))}
          </div>
        </div>
        <button className="form__submit" type="submit"></button>
      </form>
    </>
  );
}

export default ContactForm;
