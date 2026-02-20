import '/src/Components/Product-thumbnails/product-thumbnails.css';
import { useState } from "react";
import { ModalView } from "../Product-View/product-view.jsx"; 


function ImageThumbnails() {
const [isModalOn, setIsModalOn] = useState(null);


function handleModalViewDisplay() {
    setIsModalOn(!isModalOn)
}



    return(<>
    <div className="thumb-images">
    <img src="../image-product-1.jpg" alt="" onClick={handleModalViewDisplay} />
    <img src="../image-product-2.jpg" alt="" onClick={handleModalViewDisplay}/>
    <img src="../image-product-3.jpg" alt="" onClick={handleModalViewDisplay}/>
    <img src="../image-product-4.jpg" alt="" onClick={handleModalViewDisplay}/>

    </div>

    {isModalOn && <ModalView /> }
    
    
    </>)
}

export default ImageThumbnails;