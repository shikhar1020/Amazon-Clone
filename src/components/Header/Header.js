import React from "react";
import { MdSearch } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../services/firebase";
import "./style.scss";

// Remove Underline from Link
// https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthintication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <div>
          <img
            className="headerLogo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </div>
      </Link>
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <MdSearch className="searhIcon" />
      </div>
      <div className="headerSide">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthintication} className="hederSignIn">
            <span className="headerSideLine1">
              Hey, {user ? user?.email : `Guest`}
            </span>
            <span className="headerSideLine2">
              {user ? `Sign Out` : `Sign In`}
            </span>
          </div>
        </Link>
        <Link to="/order" style={{ textDecoration: "none" }}>
          <div className="headerOrders">
            <span className="headerSideLine1">Returns </span>
            <span>& Orders</span>
          </div>
        </Link>
        <div className="headerPrime">
          <span className="headerSideLine1">Your </span>
          <span className="headerSideLine2">Prime</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="headerCart">
            <MdShoppingCart />
            <span className="headerSideLine2 headerBasket">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
