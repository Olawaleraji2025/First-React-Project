import { useState } from "react";
import "./product-content.css";

function ProductInfo({ title, price }) {
  return (
    <div className="content-container">
      <h5 className="header-5">SNEAKER COMPANY</h5>
      <h2 className="header-2">{title}</h2>
      <p className="p-1">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they"ll withstand everything the
        weather can offer.
      </p>
      <div className="price-container-1">
        <span className="sp-1">${price}.00</span>
        <span className="sp-2">50%</span>
        <div className="price-container-2">
          <span className="sp-3">$250</span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
