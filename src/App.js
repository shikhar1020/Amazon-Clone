import { Suspense, lazy, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import "./App.scss";
import { auth } from "./services/firebase";
import { useStateValue } from "./context/StateProvider";

// Pages Componenents Import
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import NoRoute from "./pages/NoRoute/NoRoute";
import Login from "./pages/Login/Login";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";

//Stripe Payment Imports
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IlBTzSJ4FpQdQxNaXgyDQQDYgMyCQEK83VitTPsETYrKE1tb5xiuljZ5qUcYnPOmXCssPnL2mcnqNhzBTYWElQ800X5r3TXqt"
);

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
          <Route path="/order" component={Orders} />
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route component={NoRoute} />
        </Switch>
      </>
    </div>
  );
}

export default App;
