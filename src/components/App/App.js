import { Route, Switch, useHistory } from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
