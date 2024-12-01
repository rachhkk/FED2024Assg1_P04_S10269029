const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateSlide() {
    const slideWidth = images[0].clientWidth; 
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`; 
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) { 
        currentIndex--;
        updateSlide();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) { 
        currentIndex++;
        updateSlide();
    }
});
