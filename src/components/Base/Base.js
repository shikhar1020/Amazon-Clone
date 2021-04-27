import React from "react";
import Product from "../Product/Product.js";
import "./style.scss";

function Base() {
  return (
    <div className="base">
      <div className="baseContainer">
        <img
          className="baseImage"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_GenericAwardsSHMar21/9c6b9227-7dca-4d17-9594-710c28965047._UR3000,600_SX1500_FMjpg_.jpg"
          alt="Amazon Sale"
        />
        <div className="productRow">
          <Product
            id="23243"
            title="Boult Audio Bass Buds"
            price="122"
            image="https://m.media-amazon.com/images/I/71rSu40EANL._AC_UY218_.jpg"
            rating={3}
          />

          <Product
            id="23543"
            title="Boult Audio Bass Buds"
            price="122"
            image="https://m.media-amazon.com/images/I/71rSu40EANL._AC_UY218_.jpg"
            rating={3}
          />
        </div>

        <div className="productRow">
          <Product
            id="23243"
            title="Boult Audio Bass Buds"
            price="122"
            image="https://m.media-amazon.com/images/I/71rSu40EANL._AC_UY218_.jpg"
            rating={3}
          />

          <Product
            id="23543"
            title="Boult Audio Bass Buds"
            price="122"
            image="https://m.media-amazon.com/images/I/71rSu40EANL._AC_UY218_.jpg"
            rating={3}
          />

          <Product
            id="23543"
            title="Boult Audio Bass Buds"
            price="122"
            image="https://m.media-amazon.com/images/I/71rSu40EANL._AC_UY218_.jpg"
            rating={3}
          />
        </div>

        <div className="productRow">
          <Product
            id="23543"
            title="Boult Audio Bass Buds"
            price="122"
            image="https://m.media-amazon.com/images/I/71rSu40EANL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Base;
