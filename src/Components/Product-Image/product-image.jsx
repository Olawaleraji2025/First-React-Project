import { useState } from "react";
import "./product-image.css";

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
        "./src/assets/images/image-product-1.jpg",
        "./src/assets/images/image-product-2.jpg",
        "./src/assets/images/image-product-3.jpg",
        "./src/assets/images/image-product-4.jpg"
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
                <img src="./src/assets/images/icon-previous.svg" alt="Previous" /> 
            </div>
            <div className="next-icon" onClick={() => handleSliding('next')}>
                <img src="./src/assets/images/icon-next.svg" alt="Next" /> 
            </div>
        </div>
        
        </>
    )
}

export default MainSection
