let slideIndex = 1;
let slides, dots;
let slideTimer;

// Initialize slideshow
function initSlideshow() {
  slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.dots');
const wrapper = document.querySelector('.slides-wrapper');
const track = document.querySelector('.slides-track');

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

  // start autoplay
  startAutoplay();
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAutoplay();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAutoplay();
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

function startAutoplay() {
  slideTimer = setInterval(() => {
    plusSlides(1);
  }, 5000); // change every 5 seconds
}

function resetAutoplay() {
  clearInterval(slideTimer);
  startAutoplay();
}

// Add button functionality
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
  document.querySelector('.next').addEventListener('click', () => plusSlides(1));

  initSlideshow();
});

// MENU CARD ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    observer.observe(card);
  });
});
