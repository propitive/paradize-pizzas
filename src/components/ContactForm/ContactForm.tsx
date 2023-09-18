import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  pizzaOptions,
  appetizerOptions,
  saladOptions,
  dessertOptions,
  pastaOptions,
  dichotomousOptions,
} from "../../utils/constants";
import iconPhone from "../../images/icons/iconPhone.png";
import { SelectOption } from "../MultipleSelect/MultipleSelect.tsx";
import MultipleSelect from "../MultipleSelect/MultipleSelect.tsx";

function ContactForm({ handleVisibleReset }) {
  const [pizzaValue, setPizzaValue] = useState<SelectOption[]>([]);
  const [appetizerValue, setAppetizerValue] = useState<SelectOption[]>([]);
  const [saladValue, setSaladValue] = useState<SelectOption[]>([]);
  const [dessertValue, setDessertValue] = useState<SelectOption[]>([]);
  const [pastaValue, setPastaValue] = useState<SelectOption[]>([]);
  const [charcuterieValue, setCharcuterieValue] = useState<
    SelectOption | undefined
  >();
  const [glazingValue, setGlazingValue] = useState<SelectOption | undefined>();

  return (
    <>
      <Header handleVisibleReset={handleVisibleReset} />
      <h1 className="contact-form__header">Contact Us</h1>
      <form className="form">
        <div className="form__input-box">
          <input className="form__input" type="text" required />
          <span className="form__input-span">Full Name</span>
        </div>
        <div className="form__input-box">
          <input className="form__input" type="email" required />
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
        <div>
          <h3 className="form__input-label">Oven Baked Pizzas</h3>
          <MultipleSelect
            multiple
            options={pizzaOptions}
            value={pizzaValue}
            onChange={(o) => setPizzaValue(o)}
          />
        </div>
        <div>
          <h3 className="form__input-label">Appetizers</h3>
          <MultipleSelect
            multiple
            options={appetizerOptions}
            value={appetizerValue}
            onChange={(o) => setAppetizerValue(o)}
          />
        </div>
        <div>
          <h3 className="form__input-label">Salads</h3>
          <MultipleSelect
            multiple
            options={saladOptions}
            value={saladValue}
            onChange={(o) => setSaladValue(o)}
          />
        </div>
        <div>
          <h3 className="form__input-label">Desserts</h3>
          <MultipleSelect
            multiple
            options={dessertOptions}
            value={dessertValue}
            onChange={(o) => setDessertValue(o)}
          />
        </div>
        <div>
          <h3 className="form__input-label">Pastas</h3>
          <MultipleSelect
            multiple
            options={pastaOptions}
            value={pastaValue}
            onChange={(o) => setPastaValue(o)}
          />
        </div>
        <div>
          <h3 className="form__input-label">
            Will you want a charcuterie board?
          </h3>
          <MultipleSelect
            options={dichotomousOptions}
            value={charcuterieValue}
            onChange={(o) => setCharcuterieValue(o)}
          />
        </div>
        <div>
          <h3 className="form__input-label">Will you want a glazing table?</h3>
          <MultipleSelect
            options={dichotomousOptions}
            value={glazingValue}
            onChange={(o) => setGlazingValue(o)}
          />
        </div>
        <button className="form__button">
          <div className="form__button-original">Submit</div>
          <div className="form__button-letters">
            <span>S</span>
            <span>U</span>
            <span>B</span>
            <span>M</span>
            <span>I</span>
            <span>T</span>
          </div>
        </button>
      </form>
      <div className="contact-form__seperator-container">
        <hr className="contact-form__seperator" />
        <h2 className="contact-form__seperator-text">OR</h2>
      </div>
      <div className="contact-form__number-container">
        <img
          className="contact-form__number-image"
          src={iconPhone}
          alt="Icon of a phone"
        />
        <h2 className="contact-form__number">(469) 605-8089</h2>
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;
