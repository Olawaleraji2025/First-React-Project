
import "./product-view.css";
import "/src/Components/Product-Image/product-image.css";
import useSliding from "/src/hooks/useSliding.js";

// Array of main images corresponding to each thumbnail
// Index 0 = first thumbnail, Index 1 = second thumbnail, etc.
const mainImages = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg"
];

export function ModalView({ onClose, toggle }) {

    const { currentSlide: currentImageIndex, nextSlide, prevSlide } = useSliding(4);

    /**
     * HOW TO GRAB HOLD OF AN ELEMENT OR VALUE WHEN THE USER CLICKS:
     * 
     * There are several ways to capture click events in React:
     * 
     * 1. USING ARROW FUNCTION IN onClick (used below):
     *    - onClick={() => handleThumbnailClick(index)}
     *    - The arrow function creates a closure and passes the index value
     *    - This is the most common and recommended approach in React
     * 
     * 2. USING EVENT OBJECT:
     *    - onClick={(event) => handleClick(event)}
     *    - The event object contains information about the click
     *    - event.target gives you the actual DOM element that was clicked
     *    - event.target.src gives you the src attribute value
     * 
     * 3. USING DATA ATTRIBUTES:
     *    - You can add data-index="0" to the img element
     *    - Then access it via event.target.dataset.index
     * 
     * 4. USING REF (useRef hook):
     *    - For accessing DOM elements directly
     *    - const imgRef = useRef(null)
     *    - <img ref={imgRef} ... />
     *    - imgRef.current gives you the DOM node
     */

    // This function is called when a thumbnail is clicked
    // The 'index' parameter is passed from the arrow function in onClick
    
    function handleThumbnailClick(index) {
        goToSlide(index);
        
}


    return (
        <div className={onClose ? "modal-overlay" : "modal"}>
            <div className="modal-content" >
                <button className="modal-close-btn">
                    <img src="/icon-close.svg" alt="close" onClick={toggle} />
                </button>
                <div className="modal-main-image">
                    {/* 
                        We use the state value (currentImageIndex) to determine 
                        which image to display from our mainImages array
                    */}
                    <img src={mainImages[currentImageIndex]} alt="Product" />
                </div>
                <div className="modal-thumbnails">
                    {/* 
                        HOW THE CLICK VALUE IS CAPTURED:
                        
                        Each thumbnail has an onClick handler with an arrow function:
                        onClick={() => handleThumbnailClick(index)}
                        
                        - The () => creates a new function when the component renders
                        - handleThumbnailClick(index) is immediately executed with the index value
                        - This passes the specific index (0, 1, 2, or 3) to our handler
                        - This is how we GRAB THE VALUE of which thumbnail was clicked
                    */}
                    <img 
                        src="/image-product-1-thumbnail.jpg" 
                        alt="Thumbnail 1" 
                        className={`thumbnail ${currentImageIndex === 0 ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(0)} 
                    />
                    <img 
                        src="/image-product-2-thumbnail.jpg" 
                        alt="Thumbnail 2" 
                        className={`thumbnail ${currentImageIndex === 1 ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(1)} 
                    />
                    <img 
                        src="/image-product-3-thumbnail.jpg" 
                        alt="Thumbnail 3" 
                        className={`thumbnail ${currentImageIndex === 2 ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(2)} 
                    />
                    <img 
                        src="/image-product-4-thumbnail.jpg" 
                        alt="Thumbnail 4" 
                        className={`thumbnail ${currentImageIndex === 3 ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(3)} 
                    />
                </div>
                <div className="direction-container">
            <div className="prev-icon">
                <img src="../icon-previous.svg" alt="Previous" onClick={prevSlide} /> 
            </div>
            <div className="next-icon" >
                <img src="../icon-next.svg" alt="Next" onClick={nextSlide} /> 
            </div>
        </div>
            </div>
        </div>
    );
}

