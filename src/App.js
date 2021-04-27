import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import NoRoute from "./pages/NoRoute/NoRoute";
import "./App.scss";

/* ---- Lazy load base app routes ---- */
// const Home = lazy(() => import("./pages/Home/Home"));
// const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route component={NoRoute} />
        </Switch>
      </>
    </div>
  );
}

export default App;
