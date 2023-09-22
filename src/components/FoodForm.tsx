import React, { useRef } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  pizzaOptions,
  appetizerOptions,
  saladOptions,
  dessertOptions,
  pastaOptions,
  dichotomousOptions,
} from "../utils/constants";
import FormWrapper from "./FormWrapper.tsx";

const animatedComponents = makeAnimated();

type UserData = {
  pizzaData: string;
  appetizerData: string;
  saladData: string;
  dessertData: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function FoodForm({
  pizzaData,
  appetizerData,
  saladData,
  dessertData,
  updateFields,
}: UserFormProps) {
  const pizza = useRef();
  const appetizer = useRef();
  const salad = useRef();
  const dessert = useRef();

  return (
    <FormWrapper title="Entrée">
      <div>
        <label className="form__label">Special Requests</label>
        <Select
          options={pizzaOptions}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          name="pizzas"
          className="react-select__container"
          classNamePrefix="react-select"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              background: "transparent",
              borderRadius: 0,
            }),
          }}
          ref={pizza}
          //   onChange={(e) => updateFields({ pizzaData: e.target.value })}
          onChange={(e) => updateFields({ pizzaData: e })}
        />
      </div>
      <div>
        <label className="form__label">Appetizers</label>
        <Select
          options={appetizerOptions}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          name="appetizers"
          className="react-select__container"
          classNamePrefix="react-select"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              background: "transparent",
              borderRadius: 0,
            }),
          }}
          ref={appetizer}
          onChange={(e) => updateFields({ appetizerData: e })}
        />
      </div>
      <div>
        <label className="form__label">Salads</label>
        <Select
          options={saladOptions}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          name="salads"
          className="react-select__container"
          classNamePrefix="react-select"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              background: "transparent",
              borderRadius: 0,
            }),
          }}
          ref={salad}
          onChange={(e) => updateFields({ saladData: e })}
        />
      </div>
      <div>
        <label className="form__label">Desserts</label>
        <Select
          options={dessertOptions}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          name="desserts"
          className="react-select__container"
          classNamePrefix="react-select"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              background: "transparent",
              borderRadius: 0,
            }),
          }}
          ref={dessert}
          onChange={(e) => updateFields({ dessertData: e })}
        />
      </div>
    </FormWrapper>
  );
}

export default FoodForm;
