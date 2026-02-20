import { useState } from "react";
import "./product-image.css"
import ImageThumbnails from "../Product-thumbnails/product-thumbnail";

function MainSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const totalSlides = 4;

    function handleSliding(direction) {
        if (direction === 'next') {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        } else if (direction === 'prev') {
            setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        }
    }

    const images = [
        "../image-product-1.jpg",
        "../image-product-2.jpg",
        "../image-product-3.jpg",
        "../image-product-4.jpg"
    ];

    return (
        <>
        <div className="image-cont">
            {images.map((src, index) => (
                <img 
                    key={index}
                    src={src} 
                    alt={`Product ${index + 1}`} 
                    className={`hero-image ${currentSlide === index ? 'active' : ''}`}
                />
            ))}
        </div>
        <div className="direction-container">
            <div className="prev-icon" onClick={() => handleSliding('prev')}>
                <img src="../icon-previous.svg" alt="Previous" /> 
            </div>
            <div className="next-icon" onClick={() => handleSliding('next')}>
                <img src="../icon-next.svg" alt="Next" /> 
            </div>
        </div>

        <div>
            <ImageThumbnails />
        </div>
        
        </>
    )
}

export default MainSection
