import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";

const AppRouter = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

export default AppRouter;
