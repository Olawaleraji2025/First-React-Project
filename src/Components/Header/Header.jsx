import { useState } from 'react';
import './Header.css';
import SideMenu from '../SideBar/sideBar.jsx';
import EmptyCard from "../Empty Modal/emptyCart.jsx"

function NavBar({ qty, item }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const [isCartEmpty, setIsCartEmpty] = useState(false); 

    function handleSideBar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    function handleCloseSidebar() {
        setIsSidebarOpen(false);
    }

    function HandleEmptyCart() {
        setIsCartEmpty(!isCartEmpty);
    }





    return(
        <>
<div className='nav-bar-container'>
    <div>
    <img className='icon-menu' src="./src/assets/images/icon-menu.svg" alt="icon-menu-img" onClick={handleSideBar} />
    <img src="./src/assets/images/logo.svg" alt="Sneakers-logo-image" />

    </div>

    <div className='nav-links'>
        <span>Collections</span>
        <span>Men</span>
        <span>Women</span>
        <span>About</span>
        <span>Contact</span>
    </div>

<div className='cart-Avatar'  >

    <img src="./src/assets/images/icon-cart.svg" alt="icon-menu-img" className='cart' onClick={HandleEmptyCart} />
    <div className='qty'>
        <span className='qty-text'>{qty}</span>
    </div>
    <img className='Avatar' src="./src/assets/images/image-avatar.png" alt="Sneakers-logo-image" />
</div>

</div>

{isSidebarOpen && <SideMenu isOpen={isSidebarOpen} onClose={handleCloseSidebar} />}

{/* Pass both qty and item (product details) to EmptyCard */}
{isCartEmpty && <EmptyCard theQty={qty} theItem={item} />}

        </>
    )
}

export default NavBar