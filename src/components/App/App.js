import { Route, Switch, useHistory } from "react-router-dom";
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
    <>
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
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </>
  );
}

export default App;
