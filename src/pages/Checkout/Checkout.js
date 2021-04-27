import React from "react";
import Header from "../../components/Header/Header.js";
import CheckoutSubTotal from "../../components/CheckoutSubTotal/CheckoutSubTotal";
import CheckoutList from "../../components/CheckoutList/CheckoutList";
import "./checkout.scss";

function Checkout() {
  return (
    <div className="checkout">
      {/* <Header /> */}
      <div className="checkoutLeft">
        <img
          className="checkoutPoster"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" //"https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/2X_AuCC_Alarms._CB428378209_.jpg"
          alt=""
        />
        <div className="checkoutTitle">
          <CheckoutList />
        </div>
      </div>
      <div className="checkoutRight">
        <CheckoutSubTotal />
      </div>
    </div>
  );
}

export default Checkout;
