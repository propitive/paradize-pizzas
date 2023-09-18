import React, { FormEvent } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import { menuOfPizzas } from "../../utils/constants";
import Footer from "../Footer/Footer";
import iconPhone from "../../images/icons/iconPhone.png";
import { SelectOption } from "../MultipleSelect/MultipleSelect";
import MultipleSelect from "../MultipleSelect/MultipleSelect.tsx";
import { useMultistepForm } from "../MultistepForm/MultistepForm.ts";
import AddOnsForm from "../AddOnsForm/AddOnsForm.tsx";
import FoodForm from "../FoodForm/FoodForm.tsx";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm.tsx";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

const pizzaOptions = [
  { label: "Ricotta + Bacon", value: 1 },
  { label: "Pesto", value: 2 },
  { label: "Margherita", value: 3 },
  { label: "Meat Lovers", value: 4 },
  { label: "Veggie", value: 5 },
  { label: "Pepperoni", value: 6 },
  { label: "Pepperoni + Mushrooms", value: 7 },
  { label: "Pepperoni + Jalapenos", value: 8 },
  { label: "Chef's Special", value: 9 },
  { label: "Classic Cheese", value: 10 },
  { label: "BBQ Chicken", value: 11 },
  { label: "Italian Sausage", value: 12 },
  { label: "Prosciutto + Honey", value: 13 },
  { label: "Hawaiian", value: 14 },
  { label: "Five Cheese", value: 15 },
  { label: "pepperoni + Black Olives", value: 16 },
];

const appetizerOptions = [
  { label: "Sausage Lollipop", value: 1 },
  { label: "Chicken Bacon Wrap", value: 2 },
  { label: "Tomato Bruschetta", value: 3 },
  { label: "Mushroom Cristinis", value: 4 },
];

const saladOptions = [
  { label: "Ceaser Salad", value: 1 },
  { label: "House Salad", value: 2 },
];

const dessertOptions = [
  { label: "Nutella + Marshmallow Cream Pizza", value: 1 },
  { label: "Peach Pizza", value: 2 },
];

const pastaOptions = [
  { label: "Chicken Alfredo", value: 1 },
  { label: "Shrimp Alfredo", value: 2 },
  { label: "Roasted Chicken Penne", value: 3 },
  { label: "Red Sauce Meatballs", value: 4 },
];

const dichotomousOptions = [
  { label: "Yes", value: 1 },
  { label: "No", value: 1 },
];

type FormData = {
  ovenBakedPizzas: string;
  appetizers: string;
  salads: string;
  dessert: string;
  pasta: string;
  charcuterie: string;
  glazing: string;
  fullName: string;
  email: string;
  expectedAttendance: string;
  location: string;
};

const INITIAL_DATA: FormData = {
  ovenBakedPizzas: "",
  appetizers: "",
  salads: "",
  dessert: "",
  pasta: "",
  charcuterie: "",
  glazing: "",
  fullName: "",
  email: "",
  expectedAttendance: "",
  location: "",
};

function ContactForm({ handleVisibleReset }) {
  const [data, setData] = useState(INITIAL_DATA);
  const [pizzaValue, setPizzaValue] = useState<SelectOption[]>([]);
  const [appetizerValue, setAppetizerValue] = useState<SelectOption[]>([]);
  const [saladValue, setSaladValue] = useState<SelectOption[]>([]);
  const [dessertValue, setDessertValue] = useState<SelectOption[]>([]);
  const [pastaValue, setPastaValue] = useState<SelectOption[]>([]);
  const [charcuterieValue, setCharcuterieValue] = useState<
    SelectOption | undefined
  >();
  const [glazingValue, setGlazingValue] = useState<SelectOption | undefined>();

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <FoodForm {...data} />,
      <AddOnsForm {...data} />,
      <PersonalInfoForm {...data} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

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
      <div
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "1rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
        }}
      >
        <form onSubmit={onSubmit}>
          <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="button">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
      <div className="contact-form__seperator-container">
        <hr className="contact-form__seperator" />
        <h2 className="contact-form__seperator-text">OR</h2>
      </div>
      <div className="contact-form__number-container">
        <img className="contact-form__number-image" src={iconPhone} />
        <h2 className="contact-form__number">(469) 605-8089</h2>
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;
