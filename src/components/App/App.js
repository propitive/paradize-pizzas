import { Route, Switch, useHistory } from "react-router-dom";
import MenuPizza from "../MenuPizza/MenuPizza";

import "./App.css";
import Main from "../Main/Main";

function App() {
  return (
    <Switch>
      <Route path="/menu/pizza">
        <MenuPizza />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
