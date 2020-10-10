import React from "react";
import { Home,Store} from "../views";
import {Route,BrowserRouter as Router} from "react-router-dom";
const Navigation = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route  path="/store" component={Store} />
    </Router>
  );
};
export default Navigation;
