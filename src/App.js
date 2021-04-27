import { Suspense, lazy, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import NoRoute from "./pages/NoRoute/NoRoute";
import Login from "./pages/Login/Login";
import "./App.scss";
import { auth } from "./services/firebase";
import { useStateValue } from "./context/StateProvider";

/* ---- Lazy load base app routes ---- */
// const Home = lazy(() => import("./pages/Home/Home"));
// const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is: ", authUser);
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route component={NoRoute} />
        </Switch>
      </>
    </div>
  );
}

export default App;
