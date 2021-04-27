import React from "react";
import "./style.scss";

function CheckoutItem({ id, image, title, price, rating }) {
  return (
    <div className="checkoutItem">
      <img className="checkoutItemImage" src={image} alt={title} />
      <div className="itemInfo">
        <p className="itemTitle">{title}</p>
        <p className="itemPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="itemRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
