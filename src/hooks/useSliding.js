import { useState, useCallback } from 'react';


function useSliding(totalSlides) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const goToSlide = useCallback((index) => {
        if (index >= 0 && index < totalSlides) {
            setCurrentSlide(index);
        }
    }, [totalSlides]);

    console.log('%c=== WITH useCallback ===', 'color: green; font-weight: bold;');
    console.log('nextSlide function ID:', nextSlide.name, '→', nextSlide.toString().slice(0, 50));
    console.log('prevSlide function ID:', prevSlide.name, '→', prevSlide.toString().slice(0, 50));
    console.log('goToSlide function ID:', goToSlide.name, '→', goToSlide.toString().slice(0, 50));

    return {
        currentSlide,
        nextSlide,
        prevSlide,
        goToSlide
    };
}

export default useSliding;
