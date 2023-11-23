import jalapenoPoppers from "../images/featured/jalapenoPoppers.PNG";
import salad from "../images/featured/salad.jpg";
import snackBar from "../images/featured/snackBar.PNG";
import featuredPizzaTable from "../images/featured/pizzaTable.jpg";
import featuredRedApps from "../images/featured/redApps.jpg";
import featuredThreePizzas from "../images/featured/threePizzasInPicture.jpg";
import featuredOvenAtNight from "../images/featured/ovenAtNight.PNG";

//// MENU APPETIZERS ////

import apperiterChickenBaconWraps from "../images/menuAppetizers/chickenBaconWraps.jpg";
import apperiterJalapenoPoppers from "../images/menuAppetizers/jalapenoPoppers.jpg";
import apperiterMushroomCrositi from "../images/menuAppetizers/mushroomCrositi.jpg";
import apperiterSausageLollipops from "../images/menuAppetizers/sausageLollipops.jpg";
import apperiterShrimpSkewers from "../images/menuAppetizers/shrimpSkewers.jpg";
import apperiterTinyBlt from "../images/menuAppetizers/tinyBlt.jpg";
import apperiterTomatoBruschetta from "../images/menuAppetizers/tomatoBruschetta.jpg";

//// MENU DESSERTS ////

import dessertChocolateNutella from "../images/menuDesserts/chocolateNutella.jpg";
import dessertPeachPizza from "../images/menuDesserts/peachPizza.jpg";

//// MENU PASTAS ////

import pastaChickenAlfredo from "../images/menuPastas/chickenAlfredo.jpg";
import pastaRoastedChickenPenne from "../images/menuPastas/roastedChickenPenne.jpg";
import pastaShrimpAlfredo from "../images/menuPastas/shrimpAlfredo.jpg";
import pastaSpaghetti from "../images/menuPastas/spaghetti.jpg";

//// MENU PIZZAS ////

import pizzaBaconRicotta from "../images/menuPizzas/baconRicotta.jpg";
import pizzaBbqChicken from "../images/menuPizzas/bbqChicken.jpg";
import pizzaCheese from "../images/menuPizzas/cheese.jpg";
import pizzaChefsSpecial from "../images/menuPizzas/chefsSpecial.jpg";
import pizzaFiveCheese from "../images/menuPizzas/fiveCheese.jpg";
import pizzaHawaiian from "../images/menuPizzas/hawaiian.jpg";
import pizzaItalianSausage from "../images/menuPizzas/italianSausage.jpg";
import pizzaMargherita from "../images/menuPizzas/margherita.jpg";
import pizzaMeatsPizza from "../images/menuPizzas/meatsPizza.jpg";
import pizzaPepperoni from "../images/menuPizzas/pepperoni.jpg";
import pizzaPepperoniBlackOlives from "../images/menuPizzas/pepperoniBlackOlives.jpg";
import pizzaPepperoniJalapenos from "../images/menuPizzas/pepperoniJalapenos.jpg";
import pizzaPepperoniMushrooms from "../images/menuPizzas/pepperoniMushrooms.jpg";
import pizzaPesto from "../images/menuPizzas/pesto.jpg";
import pizzaProsciuttoHoney from "../images/menuPizzas/prosciuttoHoney.jpg";
import pizzaVeggie from "../images/menuPizzas/veggie.jpg";

//// MENU SALADS ////

import saladCeaser from "../images/menuSalads/caesar.jpg";
import saladHouse from "../images/menuSalads/house.jpg";

//// FEATURED ////

//// EXPLORE OUR MENU ////

import exploreAppetizer from "../images/exploreOurMenu/appetizer.jpg";
import exploreDessert from "../images/exploreOurMenu/dessert.jpg";
import explorePasta from "../images/exploreOurMenu/pasta.jpg";
import explorePizza from "../images/exploreOurMenu/pizza.jpg";
import exploreSalad from "../images/exploreOurMenu/salad.jpg";

//// ABOUT ////

//// GALLERY ////

import galleryCharcuterieWithGrapes from "../images/gallery/charcuterieWithGrapes.PNG";
import galleryJalapenoPoppers from "../images/gallery/jalapenoPoppers.PNG";
import galleryPennePasta from "../images/gallery/pennePasta.PNG";
import gallerySebasAndMarcos from "../images/gallery/sebasAndMarcos.PNG";
import galleryServingTable from "../images/gallery/servingTable.PNG";
import gallerySkewers from "../images/gallery/skewers.PNG";
import gallerySpaghettiInOven from "../images/gallery/spaghettiInOven.PNG";
import galleryTomatoBruschetta from "../images/gallery/tomatoBruschetta.PNG";

//// ABOUT INFO CARDS ////

import aboutChecklist from "../images/icons/about/aboutChecklist.png";
import aboutHandshake from "../images/icons/about/aboutHandshake.png";
import aboutMagnifier from "../images/icons/about/aboutMagnifier.png";
import aboutHourglass from "../images/icons/about/aboutHourglass.png";
import aboutChef from "../images/icons/about/aboutChef.png";

//////////////// PHOTOS ////////////////
export const featuredPhotos = [
  featuredThreePizzas,
  jalapenoPoppers,
  featuredRedApps,
  featuredPizzaTable,
  salad,
  snackBar,
  featuredOvenAtNight,
];

export const explorePhotos = [
  { image: explorePizza, title: "Brick Oven Pizzas", path: "/menu/pizza" },
  { image: exploreAppetizer, title: "Appetizers", path: "/menu/appetizer" },
  { image: exploreSalad, title: "Salads", path: "/menu/salad" },
  { image: exploreDessert, title: "Desserts", path: "/menu/dessert" },
  { image: explorePasta, title: "Pastas", path: "/menu/pasta" },
];

//////////////// MENUS ////////////////
export const menuOfPizzas = [
  {
    id: 1,
    image: pizzaBaconRicotta,
    name: "Ricotta + Bacon",
    description:
      "Ricotta cheese, garlic, bacon, fresh mozzarella, and white truffle oil.",
    isPopular: true,
    isSpecialRequest: true,
  },
  {
    id: 2,
    image: pizzaPesto,
    name: "Pesto",
    description:
      "Pest sauce, fresh mozzarella, caramelized onions, and blue cheese.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 15,
    image: pizzaBbqChicken,
    name: "BBQ Chicken",
    description:
      "Red onions, bacon, grilled chicken, barbecue sauce, and Mexican blend cheese.",
    isPopular: false,
    isSpecialRequest: true,
  },
  {
    id: 3,
    image: pizzaMargherita,
    name: "Margherita",
    description: "Tomato sauce, fresh mozzarella, tomato, and basil.",
    isPopular: true,
    isSpecialRequest: false,
  },
  {
    id: 4,
    image: pizzaMeatsPizza,
    name: "Meat Lovers",
    description:
      "Smoked bacon, sausage, pepperoni, tomato sauce, and fresh mozzarella.",
    isPopular: true,
    isSpecialRequest: false,
  },
  {
    id: 5,
    image: pizzaVeggie,
    name: "Veggie",
    description:
      "Tomato sauce, tomatoes, sauteed mushroom, caramelized onions, and arugula.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 6,
    image: pizzaPepperoni,
    name: "Pepperoni",
    description: "Fresh mozzarella, pepperoni, and tomato sauce.",
    isPopular: true,
    isSpecialRequest: false,
  },
  {
    id: 7,
    image: pizzaPepperoniMushrooms,
    name: "Pepperoni + Mushrooms",
    description:
      "Fresh mozzarella, pepperoni, sauteed mushrooms, and tomato sauce.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 13,
    image: pizzaFiveCheese,
    name: "Five Cheese",
    description:
      "Fresh Mozzarella, blue cheese, ricotta, goat cheese, and parmesan cheese.",
    isPopular: false,
    isSpecialRequest: true,
  },
  {
    id: 14,
    image: pizzaItalianSausage,
    name: "Italian Sausage",
    description: "Fresh cheese, pepperoni, and Italian sausage",
    isPopular: false,
    isSpecialRequest: true,
  },
  {
    id: 8,
    image: pizzaPepperoniJalapenos,
    name: "Pepperoni + Jalapenos",
    description: "Fresh mozzarella, pepperoni, and jalapenos.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 9,
    image: pizzaChefsSpecial,
    name: "Chef's Special",
    description:
      "Tomato sauce, fresh mozzarella, sauteed mushrooms, goat cheese, pepperoni, jalapenos bacon, and caramelized onions.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 16,
    image: pizzaHawaiian,
    name: "Hawaiian",
    description: "Canadian bacon, red onions, pineapple, and bacon.",
    isPopular: false,
    isSpecialRequest: true,
  },
  {
    id: 10,
    image: pizzaCheese,
    name: "Classic Cheese",
    description: "Fresh mozzarella, tomato sauce, and parmesan cheese.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 12,
    image: pizzaProsciuttoHoney,
    name: "Honey Prosciutto",
    description: "Fresh Mozzarella, honey, prosciutto, fresh baby arugula.",
    isPopular: false,
    isSpecialRequest: true,
  },
  {
    id: 11,
    image: pizzaPepperoniBlackOlives,
    name: "Pepperoni + Black Olives",
    description: "Fresh cheese, Pepperoni and olives.",
    isPopular: false,
    isSpecialRequest: true,
  },
];

export const menuOfAppetizers = [
  {
    id: 1,
    image: apperiterSausageLollipops,
    name: "Sausage Lolipop",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 2,
    image: apperiterChickenBaconWraps,
    name: "Chicken Bacon Wrap",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 3,
    image: apperiterTomatoBruschetta,
    name: "Tomato Bruschetta",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 4,
    image: apperiterMushroomCrositi,
    name: "Mushroom Cristinis",
    description: "",
    isPopular: true,
    isSpecialRequest: false,
  },
  {
    id: 5,
    image: apperiterJalapenoPoppers,
    name: "Jalapeno Poppers",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 6,
    image: apperiterTinyBlt,
    name: "Tiny BLTs",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 7,
    image: apperiterShrimpSkewers,
    name: "Shrimp Skewers",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
];

export const menuOfSalads = [
  {
    id: 1,
    image: saladCeaser,
    name: "Caesar Salad",
    description:
      "Ricotta cheese, garlic, bacon, fresh mozzarella, and white truffle oil.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 2,
    image: saladHouse,
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
    image: dessertChocolateNutella,
    name: "Nutella + Marshmallow Cream Pizza",
    description: "Nutella, marshmallow creme, and Irish butter.",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 2,
    image: dessertPeachPizza,
    name: "Peach Pizza",
    description: "Peach, brown sugar, caramel, and powdered sugar.",
    isPopular: false,
    isSpecialRequest: false,
  },
];

export const menuOfPastas = [
  {
    id: 1,
    image: pastaChickenAlfredo,
    name: "Chicken Alfredo",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 2,
    image: pastaShrimpAlfredo,
    name: "Shrimp Alfredo",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 3,
    image: pastaRoastedChickenPenne,
    name: "Roasted Chicken Penne",
    description: "",
    isPopular: false,
    isSpecialRequest: false,
  },
  {
    id: 4,
    image: pastaSpaghetti,
    name: "Spaghetti with Meatballs",
    description: "",
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
    image: galleryCharcuterieWithGrapes,
    title: "Charcuterie Board",
  },
  {
    id: 2,
    image: galleryJalapenoPoppers,
    title: "Jalapeno Poppers",
  },
  {
    id: 3,
    image: galleryPennePasta,
    title: "Penne Pasta",
  },
  {
    id: 4,
    image: gallerySebasAndMarcos,
    title: "Crew Members",
  },
  {
    id: 5,
    image: galleryServingTable,
    title: "Serving Table",
  },
  {
    id: 6,
    image: gallerySkewers,
    title: "Skewers",
  },
  {
    id: 7,
    image: galleryTomatoBruschetta,
    title: "Tomato Bruschetta",
  },
  {
    id: 8,
    image: gallerySpaghettiInOven,
    title: "Spaghetti",
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

export const aboutInfoCards = [
  {
    icon: aboutChecklist,
    paragraph:
      "We use high-quality, fresh ingredients. This includes fresh vegetables, premium meats, and high-quality cheeses. The dough and sauce are also made with care and attention to detail.",
  },
  {
    icon: aboutHandshake,
    paragraph:
      "Our commitment to exceptional customer service begins with transparent and open communication throughout every phase of the process. From the initial consultation to the day of your event, we prioritize your vision, actively listening to your needs and preferences.",
  },
  {
    icon: aboutHourglass,
    paragraph:
      "We understand the importance of your time, and our dedicated team ensures punctual arrival without compromising the precision and excellence that define us. We adhere to strict timelines, providing you with a seamless and easy experience. ",
  },
  {
    icon: aboutChef,
    paragraph:
      "With several years of invaluable experience in the industry, our seasoned team brings a wealth of knowledge to every pizza. Using specialized cooking techniques with our traditional brick ovens contributes to the unique and delicious flavor found in every bite.",
  },
];
