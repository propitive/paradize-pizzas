import { Route, Switch } from "react-router-dom";
import MenuPizza from "../MenuPizza/MenuPizza";

import "./App.css";
import Main from "../Main/Main";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import MenuAppetizer from "../MenuAppetizer/MenuAppetizer";
import { useEffect, useState } from "react";
import MenuSalad from "../MenuSalad/MenuSalad";
import MenuDessert from "../MenuDessert/MenuDessert";
import About from "../About/About";
import MenuPasta from "../MenuPasta/MenuPasta";
import Gallery from "../Gallery/Gallery";
import ContactForm from "../ContactForm/ContactForm";
import { QuoteProvider } from "../QuoteModal/QuoteModal";

function App() {
  const [visible, setVisible] = useState(6);

  const handleShowMoreItems = (array) => {
    setVisible(array.length);
  };

  const handleVisibleReset = () => {
    setVisible(6);
  };

  useEffect(() => {
    setVisible(6);
  }, []);

  return (
    <QuoteProvider>
      <ScrollToTop />
      <Switch>
        <Route path="/menu/pizza">
          <MenuPizza
            handleShowMoreItems={handleShowMoreItems}
            handleVisibleReset={handleVisibleReset}
            visible={visible}
          />
        </Route>
        <Route path="/menu/appetizer">
          <MenuAppetizer />
        </Route>
        <Route path="/menu/salad">
          <MenuSalad />
        </Route>
        <Route path="/menu/dessert">
          <MenuDessert />
        </Route>
        <Route path="/menu/pasta">
          <MenuPasta />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact-form">
          <ContactForm handleVisibleReset={handleVisibleReset} />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </QuoteProvider>
  );
}

export default App;
