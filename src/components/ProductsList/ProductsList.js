import React from "react";
import Product from "../Product/Product.js";
import "./style.scss";

function ProductsList() {
  return (
    <div>
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
  );
}

export default ProductsList;
