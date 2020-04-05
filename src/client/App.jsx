import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
