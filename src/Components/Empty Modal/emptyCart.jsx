import "./emptyCart.css"
import { useState } from "react";


function EmptyCard({theQty, theItem}){

// const [text, setText] = useState({})

    // Check if theItem is null (cart is empty)
    if (!theItem) {
        return (
            <>
            <div className= "Modal-container">
                <h6 className="Modal-header">Cart</h6>
                <hr />
                <p className="Modal-p">
                    Your cart is empty
                </p>
            </div>
            
            </>
        )
    }

    return (
        <>
        <div className= "Modal-container">
            <h6 className="Modal-header">Cart</h6>
            <hr />
            <div>
                <div className="modal-container">
            <img src={theItem.theImage} alt="" className="image-item" />
<div>
            <p className="">
                {theItem.title}
            </p>
            <p className="">
                ${theItem.price} * {theItem.quantity}  ${theItem.totalPrice}
            </p>
    
</div>

                </div>

            </div>
            {/* <p className="Modal-p">
                Quantity: 
            </p>
            <p className="Modal-p">
                Total:
            </p> */}
        </div>
        
        </>
    )
}

export default EmptyCard