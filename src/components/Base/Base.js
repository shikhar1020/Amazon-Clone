import React from "react";
import ProductList from "../ProductsList/ProductsList";
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
        <ProductList />
      </div>
    </div>
  );
}

export default Base;
