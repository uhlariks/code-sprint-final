import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/home-page";
import Location from "../pages/location-page";
import QuizPage from "../pages/quiz-page";
import Footer from "./footer";
import Header from "./header";

/** the app is responsible for routing and loading the appropriate page within the application */

function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Switch>
        <Route path="/quiz">
          <QuizPage></QuizPage>
        </Route>

        <Route path="/location">
          <Location></Location>
        </Route>

        <Route path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
