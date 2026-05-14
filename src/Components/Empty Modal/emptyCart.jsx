import "./emptyCart.css";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function EmptyCard({ theQty, theItem, setItem, setAmt }) {
  function handleDelete() {
    if (setItem) {
      setItem(false);
      setAmt(0);
    }
  }

  if (!theItem) {
    return (
      <>
        <div className="Modal-container">
          <h6 className="Modal-header">Cart</h6>
          <hr />
          <p className="Modal-p">Your cart is empty</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="Modal-container">
        <h6 className="Modal-header">Cart</h6>
        <hr />
        <div>
          <div className="modal-container">
            <img src={theItem.theImage} alt="" className="image-item" />
            <div>
              <p className="image-title">{theItem.title}</p>
              <span className="image-price">
                ${theItem.price} x {theItem.quantity}
              </span>
              <span className="total-price">${theItem.totalPrice}</span>
            </div>
            <div>
              <FaRegTrashAlt className="trash-icon" onClick={handleDelete} />
            </div>
          </div>
        </div>
        <div className="chck-container">
          <button className="chck-btn">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default EmptyCard;
