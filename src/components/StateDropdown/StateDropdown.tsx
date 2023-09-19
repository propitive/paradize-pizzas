import React, { useState, useRef, useEffect } from "react";
import { menuOfPizzas } from "../../utils/constants";

function StateDropdown() {
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
  const [selectedPizzas, setSelectedPizzas] = useState<Record<string, boolean>>(
    menuOfPizzas.reduce((obj, pizza) => ({ ...obj, [pizza.name]: false }), {})
  );

  const numberOfPizzasSelected =
    Object.values(selectedPizzas).filter(Boolean).length;

  const dropdownRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (e.target !== dropdownRef.current) {
        setIsDropdownDisplayed(false);
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <fieldset className="state-dropdown">
      <button
        className="state-dropdown__button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsDropdownDisplayed((prevState) => !prevState);
        }}
      >
        {numberOfPizzasSelected > 0
          ? `${numberOfPizzasSelected} pizzas selected`
          : "--select your pizzas --"}

        {isDropdownDisplayed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="state-dropdown__caret"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="state-dropdown__caret"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </button>
      {isDropdownDisplayed && (
        <div
          className="panel"
          ref={dropdownRef}
          onClick={(e) => e.stopPropagation()}
        >
          {menuOfPizzas.map((pizza) => (
            <fieldset
              className={
                selectedPizzas[pizza.name]
                  ? "state-dropdown__selected-fieldset"
                  : "state-dropdown__fieldset"
              }
              key={pizza.id}
            >
              <input
                onChange={(e) =>
                  setSelectedPizzas({
                    ...selectedPizzas,
                    [pizza.name]: e.target.checked,
                  })
                }
                checked={selectedPizzas[pizza.name]}
                id={`input-${pizza.name}`}
                type="checkbox"
                name="pizza"
              />
              <label htmlFor={`input-${pizza.name}`}>{pizza.name}</label>
            </fieldset>
          ))}
        </div>
      )}
    </fieldset>
  );
}

export default StateDropdown;
