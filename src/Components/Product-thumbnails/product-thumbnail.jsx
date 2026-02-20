import '/src/Components/Product-thumbnails/product-thumbnails.css';
import { useState } from "react";
// import {ModalView} from "./src/Components/Product-View/product-view.jsx"


function ImageThumbnails() {
const [isModalOn, setIsModalOn] = useState(null);


function handleModalViewDisplay() {
    setIsModalOn(!isModalOn)
}



    return(<>
    <div className="thumb-images">
    <img src="/public/image-product-1.jpg" alt="" onClick={handleModalViewDisplay} />
    <img src="/public/image-product-2.jpg" alt="" onClick={handleModalViewDisplay}/>
    <img src="/public/image-product-3.jpg" alt="" onClick={handleModalViewDisplay}/>
    <img src="/public/image-product-4.jpg" alt="" onClick={handleModalViewDisplay}/>

    </div>

    {/* {isModalOn && <ModalView /> } */}
    
    
    </>)
}

export default ImageThumbnails;