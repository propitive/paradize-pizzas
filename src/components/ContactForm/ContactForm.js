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
import MultistepForm from "../MultistepForm/MultistepForm";

const animatedComponents = makeAnimated();

function ContactForm({ handleOpenModal, handleVisibleReset }) {
  const pizza = useRef();
  const appetizer = useRef();
  const salad = useRef();
  const dessert = useRef();
  const pasta = useRef();
  const charcuterie = useRef();
  const dichotomous = useRef();

  const handleInputClear = () => {
    pizza.current.clearValue();
    appetizer.current.clearValue();
    salad.current.clearValue();
    dessert.current.clearValue();
    pasta.current.clearValue();
    charcuterie.current.clearValue();
    dichotomous.current.clearValue();
  };

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
          handleOpenModal();
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
      {/* <form className="form" ref={form} onSubmit={sendEmail}>
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
            type="text"
            required
          />
          <span className="form__input-span">Email</span>
        </div>
        <div className="form__input-box">
          <input
            className="form__input"
            name="attendance"
            type="number"
            required
          />
          <span className="form__input-span">Expected Attendance</span>
        </div>
        <div className="form__input-box">
          <input className="form__input" name="location" required />
          <span className="form__input-span">Location</span>
        </div>
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
        <button className="form__button">
          <svg className="form__button-svg" viewBox="0 0 20 20" fill="none">
            <path
              fill="white"
              d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"
            ></path>
          </svg>
          <p className="form__button-text">SUBMIT</p>
        </button>
      </form> */}
      <MultistepForm handleOpenModal={handleOpenModal} />
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
