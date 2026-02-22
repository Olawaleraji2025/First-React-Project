import "./product-image.css"
import ImageThumbnails from "../Product-thumbnails/product-thumbnail";
import useSliding from "../../hooks/useSliding";

function MainSection() {
    const { currentSlide, nextSlide, prevSlide } = useSliding(4);

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
            <div className="prev-icon" onClick={prevSlide}>
                <img src="../icon-previous.svg" alt="Previous" /> 
            </div>
            <div className="next-icon" onClick={nextSlide}>
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
