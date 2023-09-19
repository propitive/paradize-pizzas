import React, { useRef, useEffect } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import iconPhone from "../../images/icons/iconPhone.png";

function ContactForm({ handleVisibleReset }) {
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
          <select className="form__select" name="pizzas" id="pizzas" multiple>
            <option className="form__option" value="Piscotta + Bacon">
              Piscotta + Bacon
            </option>
            <option className="form__option" value="Pesto">
              Pesto
            </option>
            <option className="form__option" value="Margherita">
              Margherita
            </option>
            <option className="form__option" value="Meat Lovers">
              Meat Lovers
            </option>
          </select>
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
