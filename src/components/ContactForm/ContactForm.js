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
      <h1 className="contact-form__header">Request a Quote</h1>
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
