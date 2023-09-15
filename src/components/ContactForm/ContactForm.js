import { useState } from "react";
import Header from "../Header/Header";
import { menuOfPizzas } from "../../utils/constants";
import { SingleSelect } from "../SingleSelect/SingleSelect.tsx";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function ContactForm() {
  const [value, setValue] = useState(options[0]);

  //   const [pizzaValue, setPizzaValue] = useState("");
  //   const onPizzaChange = (event) => {
  //     // console.log(event.target.value);
  //     setPizzaValue(event.target.value);
  //   };
  //   const onPizzaSearch = (searchTerm) => {
  //     setPizzaValue(searchTerm);
  //   };

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
        {/* <div className="form__input-box">
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
        </div> */}
        {/* <Combobox
          hideCaret
          hideEmptyPopup
          data={["Red", "Yellow", "Blue", "Orange"]}
          placeholder="Search for a color"
        /> */}
        <SingleSelect
          options={options}
          value={value}
          onChange={(o) => setValue(o)}
        />
        <button className="form__submit" type="submit"></button>
      </form>
    </>
  );
}

export default ContactForm;
