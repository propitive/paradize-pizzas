import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import { menuOfPizzas } from "../../utils/constants";
import iconPhone from "../../images/icons/iconPhone.png";
import { SelectOption } from "../MultipleSelect/MultipleSelect";
import MultipleSelect from "../MultipleSelect/MultipleSelect.tsx";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function ContactForm({ handleVisibleReset }) {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Header handleVisibleReset={handleVisibleReset} />
      <h1 className="contact-form__header">Contact us</h1>
      <div className="contact-form__number-container">
        <img className="contact-form__number-image" src={iconPhone} />
        <h2 className="contact-form__number">(469) 605-8089</h2>
      </div>
      <div className="contact-form__seperator-container">
        <hr className="contact-form__seperator" />
        <h2 className="contact-form__seperator-text">OR</h2>
      </div>
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
        <MultipleSelect
          multiple
          options={options}
          value={value1}
          onChange={(o) => setValue1(o)}
        />
        <MultipleSelect
          options={options}
          value={value2}
          onChange={(o) => setValue2(o)}
        />
        <button className="form__submit" type="submit"></button>
      </form>
    </>
  );
}

export default ContactForm;
