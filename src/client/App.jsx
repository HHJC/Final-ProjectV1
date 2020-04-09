import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import User from "./components/User";
import Recipes from "./components/Recipes";
import StoryBooks from "./Views/StoryBookView/StoryBooks";
import RecipeVideos from "./Views/RecipeVideos";
import Space from './Views/Space/Space';
<<<<<<< HEAD
import Words from "./components/Words";
import Animals from "./components/Animals";
//import AnimalCard from './Views/Animalsview/AnimalCard';
//import WordCard from './Views/Words/WordCard';
=======
import AnimalCard from './Views/Animalsview/AnimalCard';
import WordCard from './Views/Words/WordCard';
import FlashCard from './Views/ABCview/FlashCard'
>>>>>>> 9b5bcf8cd8e54053a7eb9e183c68eb908dc4ba8c




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
          <Route exact path="/Views/ABCview/FlashCard">
          <FlashCard />
          </Route>
          <Route exact path="/Views/StoryBookView/StoryBooks">
            <StoryBooks />
          </Route>
          <Route exact path="/Views/RecipeVideos">
            <RecipeVideos />
          </Route>
          <Route exact path="/Recipes">
            <Recipes />
          </Route>
          <Route exact path="/Animals">
            <Animals />
          </Route>
          <Route exact path="/Words">
            <Words />
          </Route>
          <Route exact path="/Views/Space/Space">
            <Space />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
