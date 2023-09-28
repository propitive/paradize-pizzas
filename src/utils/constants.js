import jalapenoPizza from "../images/featured/jalapenoPizza.jpg";
import jalapenoPoppers from "../images/featured/jalapenoPoppers.PNG";
import pizzaAtNight from "../images/featured/pizzaAtNight.jpg";
import pizzaSign from "../images/featured/pizzaSign.jpg";
import salad from "../images/featured/salad.jpg";
import snackBar from "../images/featured/snackBar.PNG";
import tioSebasCooking from "../images/featured/tioSebasCooking.jpg";

import * as FaIcons from "react-icons/fa";

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
    isPopular: true,
    isSpecialRequest: true,
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
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 2,
    image: jalapenoPizza,
    name: "Chicken Bacon Wrap",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 3,
    image: jalapenoPizza,
    name: "Tomato Bruschetta",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 4,
    image: jalapenoPizza,
    name: "Mushroom Cristinis",
    description: "",
    isPopular: true,
    isSpecialRequest: false,
  },
  {
    id: 5,
    image: jalapenoPizza,
    name: "Jalapeno Poppers",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 6,
    image: jalapenoPizza,
    name: "Tiny BLTs",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 7,
    image: jalapenoPizza,
    name: "Shrimp Skewers",
    description: "",
    isPopular: false,
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
    name: "Spaghetti with Meatballs",
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

//////////////// OPTIONS ////////////////

export const pizzaOptions = [
  { label: "BBQ Chicken", value: "BBQ Chicken" },
  { label: "Italian Sausage", value: "Italian Sausage" },
  { label: "Prosciutto + Honey", value: "Prosciutto + Honey" },
  { label: "Hawaiian", value: "Hawaiian" },
  { label: "Five Cheese", value: "Five Cheese" },
  { label: "Pepperoni + Black Olives", value: "Pepperoni + Black Olives" },
];

export const appetizerOptions = [
  { label: "Sausage Lollipop", value: "Sausage Lollipop" },
  { label: "Chicken Bacon Wrap", value: "Chicken Bacon Wrap" },
  { label: "Tomato Bruschetta", value: "Tomato Bruschetta" },
  { label: "Mushroom Cristinis", value: "Mushroom Cristinis" },
  { label: "Jalapeno Poppers", value: "Jalapeno Poppers" },
  { label: "Tiny BLTs", value: "Tiny BLTs" },
  { label: "Shrimp Skewers", value: "Shrimp Skewers" },
];

export const saladOptions = [
  { label: "Ceaser Salad", value: "Ceaser Salad" },
  { label: "House Salad", value: "House Salad" },
];

export const dessertOptions = [
  {
    label: "Nutella + Marshmallow Cream Pizza",
    value: "Nutella + Marshmallow Cream Pizza",
  },
  { label: "Peach Pizza", value: "Peach Pizza" },
];

export const pastaOptions = [
  { label: "Chicken Alfredo", value: "Chicken Alfredo" },
  { label: "Shrimp Alfredo", value: "Shrimp Alfredo" },
  { label: "Roasted Chicken Penne", value: "Roasted Chicken Penne" },
  { label: "Spaghetti with Meatballs", value: "Spaghetti with Meatballs" },
];

export const dichotomousOptions = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

//////////////// GALLERY ////////////////

export const galleryCards = [
  {
    id: 1,
    image: jalapenoPizza,
    title: "Chicken Alfredo",
  },
  {
    id: 2,
    image: jalapenoPizza,
    title: "Chicken Alfredo",
  },
  {
    id: 3,
    image: jalapenoPizza,
    title: "Chicken Alfredo",
  },
  {
    id: 4,
    image: jalapenoPizza,
    title: "Chicken Alfredo",
  },
  {
    id: 5,
    image: jalapenoPizza,
    title: "Chicken Alfredo",
  },
  {
    id: 6,
    image: jalapenoPizza,
    title: "Chicken Alfredo",
  },
  {
    id: 7,
    image: jalapenoPizza,
    title: "Chicken Alfredo",
  },
  {
    id: 8,
    image: jalapenoPizza,
    title: "Chicken Alfredo",
  },
];

//////////////// SIDEBAR ////////////////

export const SidebarData = [
  {
    title: "Pizzas",
    path: "/menu/pizza",
    cName: "nav-text",
  },
  {
    title: "Appetizers",
    path: "/menu/appetizer",
    cName: "nav-text",
  },
  {
    title: "Salads",
    path: "/menu/salad",
    cName: "nav-text",
  },
  {
    title: "Desserts",
    path: "/menu/dessert",
    cName: "nav-text",
  },
  {
    title: "Pastas",
    path: "/menu/pasta",
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contact-form",
    cName: "nav-text",
  },
  {
    title: "Gallery",
    path: "/gallery",
    cName: "nav-text",
  },
];
