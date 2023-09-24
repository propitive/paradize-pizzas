import React, { useRef, useState, useEffect } from "react";
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

function MultistepForm({ handleOpenModal }) {
  const [isPage, setIsPage] = useState(1);

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
  const handleNextClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleStepForward();
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleStepBackward();
  };

  const handleStepForward = () => {
    if (isPage === 3) return undefined;
    return setIsPage(isPage + 1);
  };

  const handleStepBackward = () => {
    return setIsPage(isPage - 1);
  };

  const handleSubmit = () => {
    setIsPage(1);
  };

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
          handleSubmit();
          handleOpenModal();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const pageOneClassName = isPage === 1 ? "page-one" : "page-one hidden";
  const pageTwoClassName = isPage === 2 ? "page-two" : "page-two hidden";
  const pageThreeClassName = isPage === 3 ? "page-three" : "page-three hidden";

  const indicatorTwo =
    isPage >= 2 ? "form__indicator-active" : "form__indicator";
  const indicatorThree =
    isPage === 3 ? "form__indicator-active" : "form__indicator";

  return (
    <div className="form__container">
      <div className="form__indicator-container">
        <button className="form__indicator-active">1</button>
        <button className={indicatorTwo}>2</button>
        <button className={indicatorThree}>3</button>
      </div>
      <form className="form__form" ref={form} onSubmit={sendEmail}>
        <div className={pageOneClassName}>
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
        </div>
        <div className={pageTwoClassName}>
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
            <label className="form__label">
              Will you want a glazing table?
            </label>
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
        </div>
        <div className={pageThreeClassName}>
          <div className="form__input-box">
            <input className="form__input" name="user-name" type="text" />
            <span className="form__input-span">Full Name</span>
          </div>
          <div className="form__input-box">
            <input className="form__input" name="user-email" type="text" />
            <span className="form__input-span">Email</span>
          </div>
          <div className="form__input-box">
            <input className="form__input" name="attendance" type="number" />
            <span className="form__input-span">Expected Attendance</span>
          </div>
          <div className="form__input-box">
            <input className="form__input" name="location" />
            <span className="form__input-span">Location</span>
          </div>
        </div>
        <div className={isPage !== 1 ? "form__buttons" : "form__buttons-first"}>
          {isPage !== 1 && (
            <button
              className="form__button"
              type="button"
              onClick={handleBackClick}
            >
              <p className="form__button-text">BACK</p>
            </button>
          )}
          {isPage === 3 ? (
            <button className="form__submit" type="submit">
              <svg className="form__submit-svg" viewBox="0 0 20 20" fill="none">
                <path
                  fill="white"
                  d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"
                ></path>
              </svg>
              <p className="form__submit-text">SUBMIT</p>
            </button>
          ) : (
            <button
              type="submit"
              className="form__button"
              onClick={handleNextClick}
            >
              <p className="form__button-text">NEXT</p>
            </button>
          )}
        </div>
        {/* <button className="form__submit">
          <svg className="form__button-svg" viewBox="0 0 20 20" fill="none">
            <path
              fill="white"
              d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"
            ></path>
          </svg>
          <p className="form__submit-text">SUBMIT</p>
        </button> */}
      </form>
    </div>
  );
}

export default MultistepForm;
