import jalapenoPizza from "../images/featured/jalapenoPizza.jpg";
import jalapenoPoppers from "../images/featured/jalapenoPoppers.PNG";
import pizzaAtNight from "../images/featured/pizzaAtNight.jpg";
import pizzaSign from "../images/featured/pizzaSign.jpg";
import salad from "../images/featured/salad.jpg";
import snackBar from "../images/featured/snackBar.PNG";
import tioSebasCooking from "../images/featured/tioSebasCooking.jpg";

//////////////// PHOTOS ////////////////
export const featuredPhotos = [
  jalapenoPizza,
  jalapenoPoppers,
  pizzaAtNight,
  pizzaSign,
  salad,
  snackBar,
  tioSebasCooking,
];

export const explorePhotos = [
  { image: jalapenoPizza, title: "Brick Oven Pizzas", path: "/menu/pizza" },
  { image: jalapenoPoppers, title: "Appetizers", path: "/menu/appetizer" },
  { image: pizzaAtNight, title: "Salads", path: "/menu/salad" },
  { image: pizzaSign, title: "Desserts", path: "/menu/dessert" },
  { image: snackBar, title: "Pastas", path: "/menu/pasta" },
];

//////////////// MENUS ////////////////
export const menuOfPizzas = [
  {
    id: 1,
    image: jalapenoPizza,
    name: "Ricotta + Bacon",
    description:
      "Ricotta cheese, garlic, bacon, fresh mozzarella, and white truffle oil.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 2,
    image: jalapenoPizza,
    name: "Pesto",
    description:
      "Pest sauce, fresh mozzarella, caramelized onions, and blue cheese.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 15,
    image: jalapenoPizza,
    name: "BBQ Chicken",
    description: "Fresh mozzarella, tomato sauce, and parmesan cheese.",
    isPopular: false,
    isSpecialRequest: true,
  },
  {
    id: 3,
    image: jalapenoPizza,
    name: "Margherita",
    description: "Tomato sauce, fresh mozzarella, tomato, and basil.",
    isPopular: true,
    isSpecialRequest: false,
  },
  {
    id: 4,
    image: jalapenoPizza,
    name: "Meat Lovers",
    description:
      "Smoked bacon, sausage, pepperoni, tomato sauce, and fresh mozzarella.",
    isPopular: true,
    isSpecialRequest: false,
  },
  {
    id: 5,
    image: jalapenoPizza,
    name: "Veggie",
    description:
      "Tomato sauce, tomatoes, sauteed mushroom, caramelized onions, and arugula.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 6,
    image: jalapenoPizza,
    name: "Pepperoni",
    description: "Fresh mozzarella, pepperoni, and tomato sauce.",
    isPopular: true,
    isSpecialRequest: false,
  },
  {
    id: 7,
    image: jalapenoPizza,
    name: "Pepperoni + Mushrooms",
    description:
      "Fresh mozzarella, pepperoni, sauteed mushrooms, and tomato sauce.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 13,
    image: jalapenoPizza,
    name: "Five Cheese",
    description: "Fresh mozzarella, tomato sauce, and parmesan cheese.",
    isPopular: false,
    isSpecialRequest: true,
  },
  {
    id: 14,
    image: jalapenoPizza,
    name: "Italian Sausage",
    description: "Fresh mozzarella, tomato sauce, and parmesan cheese.",
    isPopular: false,
    isSpecialRequest: true,
  },
  {
    id: 8,
    image: jalapenoPizza,
    name: "Pepperoni + Jalapenos",
    description: "Fresh mozzarella, pepperoni, and jalapenos.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 9,
    image: jalapenoPizza,
    name: "Chef's Special",
    description:
      "Tomato sauce, fresh mozzarella, sauteed mushrooms, goat cheese, pepperoni, jalapenos bacon, and caramelized onions.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 16,
    image: jalapenoPizza,
    name: "Hawaiian",
    description: "Fresh mozzarella, tomato sauce, and parmesan cheese.",
    isPopular: false,
    isSpecialRequest: true,
  },
  {
    id: 10,
    image: jalapenoPizza,
    name: "Classic Cheese",
    description: "Fresh mozzarella, tomato sauce, and parmesan cheese.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 12,
    image: jalapenoPizza,
    name: "Prosciutto",
    description: "Fresh mozzarella, tomato sauce, and parmesan cheese.",
    isPopular: false,
    isSpecialRequest: true,
  },
  {
    id: 11,
    image: jalapenoPizza,
    name: "Pepperoni + Black Olives",
    description: "Fresh mozzarella, tomato sauce, and parmesan cheese.",
    isPopular: false,
    isSpecialRequest: true,
  },
];

export const menuOfAppetizers = [
  {
    id: 1,
    image: jalapenoPizza,
    name: "Sausage Lolipop",
    description:
      "Ricotta cheese, garlic, bacon, fresh mozzarella, and white truffle oil.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 2,
    image: jalapenoPizza,
    name: "Chicken Bacon Wrap",
    description:
      "Pest sauce, fresh mozzarella, caramelized onions, and blue cheese.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 3,
    image: jalapenoPizza,
    name: "Tomato Bruschetta",
    description: "Tomato sauce, fresh mozzarella, tomato, and basil.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 4,
    image: jalapenoPizza,
    name: "Mushroom Cristinis",
    description:
      "Smoked bacon, sausage, pepperoni, tomato sauce, and fresh mozzarella.",
    isPopular: true,
    isSpecialRequest: false,
  },
];

export const menuOfSalads = [
  {
    id: 1,
    image: jalapenoPizza,
    name: "Ceaser Salad",
    description:
      "Ricotta cheese, garlic, bacon, fresh mozzarella, and white truffle oil.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 2,
    image: jalapenoPizza,
    name: "House Salad",
    description:
      "Pest sauce, fresh mozzarella, caramelized onions, and blue cheese.",
    isPopular: false,
    isSpecialRequest: false,
  },
];

export const menuOfDesserts = [
  {
    id: 1,
    image: jalapenoPizza,
    name: "Nutella + Marshmallow Cream Pizza",
    description:
      "Ricotta cheese, garlic, bacon, fresh mozzarella, and white truffle oil.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 2,
    image: jalapenoPizza,
    name: "Peach Pizza",
    description:
      "Pest sauce, fresh mozzarella, caramelized onions, and blue cheese.",
    isPopular: false,
    isSpecialRequest: false,
  },
];

export const menuOfPastas = [
  {
    id: 1,
    image: jalapenoPizza,
    name: "Chicken Alfredo",
    description:
      "Ricotta cheese, garlic, bacon, fresh mozzarella, and white truffle oil.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 2,
    image: jalapenoPizza,
    name: "Shrimp Alfredo",
    description:
      "Pest sauce, fresh mozzarella, caramelized onions, and blue cheese.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 3,
    image: jalapenoPizza,
    name: "Roasted Chicken Penne",
    description:
      "Pest sauce, fresh mozzarella, caramelized onions, and blue cheese.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 4,
    image: jalapenoPizza,
    name: "Red Sauce Meatballs",
    description:
      "Pest sauce, fresh mozzarella, caramelized onions, and blue cheese.",
    isPopular: false,
    isSpecialRequest: false,
  },
];

//////////////// NAV BAR ////////////////
export const menuNavItems = [
  {
    id: 1,
    title: "Pizza",
    path: "/menu/pizza",
    className: "nav-item",
  },
  {
    id: 2,
    title: "Appetizers",
    path: "/menu/appetizer",
    className: "nav-item",
  },
  {
    id: 3,
    title: "Salads",
    path: "/menu/salad",
    className: "nav-item",
  },
  {
    id: 4,
    title: "Desserts",
    path: "/menu/dessert",
    className: "nav-item",
  },
  {
    id: 5,
    title: "Pastas",
    path: "/menu/pasta",
    className: "nav-item",
  },
];
