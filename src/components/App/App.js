import { Route, Switch, useHistory } from "react-router-dom";
import MenuPizza from "../MenuPizza/MenuPizza";

import "./App.css";
import Main from "../Main/Main";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import MenuAppetizer from "../MenuAppetizer/MenuAppetizer";
import { useEffect, useState } from "react";

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
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </>
  );
}

export default App;
