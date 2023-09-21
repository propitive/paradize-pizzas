import React, { useRef, useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import emailjs from "@emailjs/browser";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import iconPhone from "../../images/icons/iconPhone.png";
import {
  pizzaOptions,
  appetizerOptions,
  saladOptions,
  dessertOptions,
  pastaOptions,
  dichotomousOptions,
} from "../../utils/constants";

const animatedComponents = makeAnimated();

function ContactForm({ handleVisibleReset }) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isPizzaValue, setIsPizzaValue] = useState();
  const pizza = useRef();
  console.log(pizza);
  console.log(pizza.current);

  const handleInputClear = () => {
    pizza.current.clearValue();
  };
  console.log(isFormSubmitted);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygalzf6",
        "template_suuq3lm",
        form.current,
        // e.target,
        "jGNwN29o5MpAtqpNz"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleInputClear();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Header handleVisibleReset={handleVisibleReset} />
      <h1 className="contact-form__header">Contact Us</h1>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form__input-box">
          <input
            className="form__input"
            name="user-name"
            type="text"
            required
          />
          <span className="form__input-span">Full Name</span>
        </div>
        <div className="form__input-box">
          <input
            className="form__input"
            name="user-email"
            type="email"
            required
          />
          <span className="form__input-span">Email</span>
        </div>
        <div className="form__input-box">
          <input
            className="form__input"
            name="attendance"
            type="number"
            min="25"
            required
          />
          <span className="form__input-span">Expected Attendance</span>
        </div>
        <div className="form__input-box">
          <input className="form__input" name="location" required />
          <span className="form__input-span">Location</span>
        </div>
        <div>
          <label className="form__label">Oven Baked Pizzas</label>
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
          />
        </div>
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
