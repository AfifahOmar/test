let slideIndex = 1;
let slides, dots;

// Initialize slideshow
function initSlideshow() {
  slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.dots');

  // clear any existing dots
  dotsContainer.innerHTML = '';

  // create dots dynamically
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => currentSlide(i + 1));
    dotsContainer.appendChild(dot);
  });

  dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

// Add button functionality
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

// Run when page loads
document.addEventListener('DOMContentLoaded', initSlideshow);
