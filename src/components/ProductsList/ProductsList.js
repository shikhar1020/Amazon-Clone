import React from "react";
import Product from "../Product/Product.js";
import "./style.scss";

function ProductsList() {
  return (
    <div>
      <div className="productRow">
        <Product
          id="23243"
          title="Red Tape Men's Nordic Walking Shoes"
          price="80"
          image="https://images-na.ssl-images-amazon.com/images/I/41CRI4LeYML._AC_.jpg"
          rating={3}
        />

        <Product
          id="23543"
          title="OnePlus 9 Pro 5G (8GB RAM, 128GB Storage)"
          price="153"
          image="https://m.media-amazon.com/images/I/71rSu40EANL._AC_UY218_.jpg"
          rating={4}
        />
      </div>

      <div className="productRow">
        <Product
          id="23243"
          title="Boult Audio Bass Buds"
          price="142"
          image="https://images-eu.ssl-images-amazon.com/images/I/41E5Bva7sOL._AC_SX184_.jpg"
          rating={2}
        />

        <Product
          id="23543"
          title="Clotzy Women's Tops"
          price="122"
          image="https://m.media-amazon.com/images/I/710uksQiZkL._AC_UL320_.jpg"
          rating={1}
        />

        <Product
          id="23543"
          title="Men Suits (Navy Blue)"
          price="12"
          image="https://m.media-amazon.com/images/I/61TEfXKBy7L._AC_UL320_.jpg"
          rating={5}
        />
      </div>

      <div className="productRow">
        <Product
          id="23543"
          title="Mi 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black)"
          price="1122"
          image="https://m.media-amazon.com/images/I/71qOOWyfc7L._AC_UY218_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default ProductsList;
