import React from "react";
import { useStateValue } from "../../context/StateProvider";
import CheckoutItem from "../CheckoutItem/CheckoutItem";

function CheckoutList() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkoutList">
      <h2>Your Shopping Cart</h2>
      {basket.map((item) => (
        <CheckoutItem
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default CheckoutList;
