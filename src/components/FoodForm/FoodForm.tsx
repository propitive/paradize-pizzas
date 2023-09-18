import React from "react";
import { useState } from "react";
import { SelectOption } from "../MultipleSelect/MultipleSelect";
import FormWrapper from "../FormWrapper/FormWrapper.tsx";
import MultipleSelect from "../MultipleSelect/MultipleSelect.tsx";

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

type UserFormProps = {
  ovenBakedPizza: string;
  appetizer: string;
  salad: string;
  dessert: string;
  pasta: string;
};

function FoodForm({
  ovenBakedPizza,
  appetizer,
  salad,
  dessert,
  pasta,
}: UserFormProps) {
  const [pizzaValue, setPizzaValue] = useState<SelectOption[]>([]);
  const [appetizerValue, setAppetizerValue] = useState<SelectOption[]>([]);
  const [saladValue, setSaladValue] = useState<SelectOption[]>([]);
  const [dessertValue, setDessertValue] = useState<SelectOption[]>([]);
  const [pastaValue, setPastaValue] = useState<SelectOption[]>([]);

  return (
    <>
      <FormWrapper title="Food">
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
      </FormWrapper>
    </>
  );
}

export default FoodForm;
