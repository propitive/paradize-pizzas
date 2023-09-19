import React, { useState } from "react";
import { menuOfPizzas } from "../../utils/constants";

function StateDropdown() {
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);

  return (
    <fieldset className="state-dropdown">
      <button
        className="state-dropdown__button"
        onClick={() => setIsDropdownDisplayed((prevState) => !prevState)}
      >
        --select the pizzas --
      </button>
      {isDropdownDisplayed && (
        <div className="panel">
          {menuOfPizzas.map((pizza) => (
            <fieldset className="state-dropdown__fieldset">
              <input id={`input-${pizza.name}`} type="checkbox" />
              <label htmlFor={`input-${pizza.name}`}>{pizza.name}</label>
            </fieldset>
          ))}
        </div>
      )}
    </fieldset>
  );
}

export default StateDropdown;
