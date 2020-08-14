import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
