import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import User from "./components/User";
import StoryBooks from "./Views/StoryBooks";




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/User">
            <User />
          </Route>
          <Route exact path="/Views/StoryBooks">
            <StoryBooks />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
