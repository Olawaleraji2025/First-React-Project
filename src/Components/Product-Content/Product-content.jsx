import { useState } from "react"
import "./product-content.css"

function ProductInfo({title, price}) {

    return(
        <>
        
        <h5>SNEAKER COMPANY</h5>
        <h2>{title}</h2>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they"ll withstand everything the weather can offer.</p>
        <div>
            <span>${price}</span>
            <span>50%</span>
            <div>
                <span>$250</span>
            </div>
        </div>
        </>
    )
}

export default ProductInfo