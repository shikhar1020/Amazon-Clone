import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./pages/Home/Home.js";
import Checkout from "./pages/Checkout/Checkout.js";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
