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

function AddOnForm() {
  const pasta = useRef();
  const charcuterie = useRef();
  const dichotomous = useRef();

  return (
    <FormWrapper title="Add-Ons">
      <div>
        <label className="form__label">Pastas</label>
        <Select
          options={pastaOptions}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          name="pastas"
          className="react-select__container"
          classNamePrefix="react-select"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              background: "transparent",
              borderRadius: 0,
            }),
          }}
          ref={pasta}
        />
      </div>
      <div>
        <label className="form__label">
          Will you want a charcuterie board?
        </label>
        <Select
          options={dichotomousOptions}
          closeMenuOnSelect={true}
          components={animatedComponents}
          name="charcuterie"
          className="react-select__container"
          classNamePrefix="react-select"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              background: "transparent",
              borderRadius: 0,
            }),
          }}
          ref={charcuterie}
        />
      </div>
      <div>
        <label className="form__label">Will you want a glazing table?</label>
        <Select
          options={dichotomousOptions}
          closeMenuOnSelect={true}
          components={animatedComponents}
          name="glazing"
          className="react-select__container"
          classNamePrefix="react-select"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              background: "transparent",
              borderRadius: 0,
            }),
          }}
          ref={dichotomous}
        />
      </div>
    </FormWrapper>
  );
}

export default AddOnForm;
