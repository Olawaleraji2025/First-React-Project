
import { useState } from 'react';
import './App.css'
import NavBar  from './Components/Header/Header.jsx';
import MainSection  from './Components/Product-Image/product-image.jsx';
import ProductInfo  from './Components/Product-Content/Product-content.jsx';
import Button  from './Components/Button/button.jsx';




function App() {
  // Lifted state up from Button component to App.jsx
  // This allows us to share the quantity between Button and Header components
  const [qty, setQty] = useState(0);
  const [title] = useState(`Fall Limited Edition Sneakers`);
  const [price] = useState(125);
  const [Image] = useState("src/assets/images/image-product-1.jpg");
  // item state stores the product that was added to cart
  const [item, setItem] = useState(null);
  
  // This function is called when "Add to cart" button is clicked
  // It stores the current product details (title, price) in the item state
  function handleAddItem() {
    if (qty > 0) {
      setItem({
        theImage: Image,
        title: title,
        price: price,
        quantity: qty,
        // Calculate total price: price × quantity
        totalPrice: price * qty
      });
    }
  }

  return (
    <>
      {/* Pass qty and item (product details) to NavBar for the cart modal */}
      <NavBar qty={qty} item={item} />
      <div className="first-product-container">
        <MainSection />
        <div className='second-product-container'>

        <ProductInfo price={price} title={title} />
        <Button qty={qty} setQty={setQty} onAddToCart={handleAddItem} theItem={item}  />
        </div>
      </div>
        
        {/* 
          Pass qty, setQty, and onAddToCart to Button:
          - qty: current quantity
          - setQty: function to update quantity
          - onAddToCart: function to call when "Add to cart" button is clicked
        */}
    </>
  )
}


export default App