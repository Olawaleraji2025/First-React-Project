import "./button.css"


function Button({ qty, setQty, onAddToCart }) {

    // Increase quantity by 1
    function handleIncrease() {
        setQty((prev) => prev + 1);
    }

    // Decrease quantity by 1, but not below 0
    function handleDecrease() {
        if (qty === 0) {
            return
        } else {
            setQty((prev) => prev - 1); 
        }
    }

    // Handle "Add to cart" button click
    // Calls the onAddToCart function passed from App.jsx
    function handleAddToCartClick() {
        if (onAddToCart) {
            onAddToCart(); // This will trigger handleAddItem in App.jsx
        }
    }

    return (
        <>
        <div className="qty-btn">
            <span className="decrease-btn" onClick={handleDecrease}>-</span>
            <span>{qty}</span>
            <span className="increase-btn" onClick={handleIncrease}>+</span>
        </div>

        <div>
            {/* Added onClick handler to trigger handleAddToCartClick */}
            <button className="Add-btn" onClick={handleAddToCartClick}>Add to cart</button>
        </div>
        
        </>
    )
}

export default Button