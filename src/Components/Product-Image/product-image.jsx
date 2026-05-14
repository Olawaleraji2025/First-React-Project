import "./product-image.css";
import "../Product-View/product-view.css";
import ImageThumbnails from "../Product-thumbnails/product-thumbnail";
import useSliding from "../../hooks/useSliding";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

function MainSection() {
  const { currentSlide, nextSlide, prevSlide } = useSliding(4);

  const images = [
    "../image-product-1.jpg",
    "../image-product-2.jpg",
    "../image-product-3.jpg",
    "../image-product-4.jpg",
  ];

  return (
    <div className="image-div">
      <div className="image-cont">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Product ${index + 1}`}
            className={`hero-image ${currentSlide === index ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="direction-container">
        <div className="prev-icon" onClick={prevSlide}>
          <IoIosArrowBack size={15} />
        </div>
        <div className="next-icon" onClick={nextSlide}>
          <IoIosArrowForward size={15} />
        </div>
      </div>

      <div className="thumbnails-div">
        <ImageThumbnails />
      </div>
    </div>
  );
}

export default MainSection;
