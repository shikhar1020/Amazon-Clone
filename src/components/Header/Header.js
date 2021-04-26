import React from "react";
import { MdSearch } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import "./style.scss";

function Header() {
  return (
    <div className="header">
      <img
        className="headerLogo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <MdSearch className="searhIcon" />
      </div>
      <div className="headerSide">
        <div className="hederSignIn">
          <span className="headerSideLine1">Hello, Guest </span>
          <span className="headerSideLine2">Sign In</span>
        </div>
        <div className="headerOrders">
          <span className="headerSideLine1">Returns </span>
          <span>& Orders</span>
        </div>
        <div className="headerPrime">
          <span className="headerSideLine1">Your </span>
          <span className="headerSideLine2">Prime</span>
        </div>
        <div className="headerCart">
          <MdShoppingCart />
          <span className="headerSideLine2 headerBasket">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
