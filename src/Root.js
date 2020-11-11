import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage/Homepage";
import AboutPage from "./components/AboutPage/AboutPage";
import Projects from "./components/Projects/Projects";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  </Router>
);

export default Root;