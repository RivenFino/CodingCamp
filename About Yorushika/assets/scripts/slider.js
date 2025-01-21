function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider-container');
    let currentSlide = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[0].classList.add('active');

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function previousSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Mobile swipe
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > 50) { 
            if (swipeDistance > 0) {
                previousSlide();
            } else {
                nextSlide();
            }
        }
    }

    // Desktop Click 
    slider.addEventListener('click', (e) => {
        const clickX = e.clientX;
        const sliderRect = slider.getBoundingClientRect();
        const sliderMiddle = sliderRect.left + (sliderRect.width / 2);

        if (clickX > sliderMiddle) {
            nextSlide();
        } else {
            previousSlide();
        }
    });

    // Otomatis berubah
    let slideInterval = setInterval(nextSlide, 5000);

    slider.addEventListener('touchstart', () => {
        clearInterval(slideInterval);
    });

    // Resume auto-sliding after touch
    slider.addEventListener('touchend', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
}

window.addEventListener('load', initSlider);