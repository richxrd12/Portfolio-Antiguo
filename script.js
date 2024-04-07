function changeSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    const selectedSlide = document.getElementById(`slider-img-${slideNumber}`);
    if (selectedSlide) {
        selectedSlide.style.display = 'block';
    }

}