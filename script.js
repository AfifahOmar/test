let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const slidesContainer = document.querySelector(".slides-container");
const total = slides.length;
let timer;

// Show a specific slide
function showSlide(n) {
  if (n > total) { slideIndex = 1; }
  else if (n < 1) { slideIndex = total; }
  else { slideIndex = n; }

  // Move slidesContainer
  slidesContainer.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;

  // Update dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex - 1].classList.add("active");
}

// Next / previous
function plusSlides(n) {
  showSlide(slideIndex + n);
  resetTimer();
}

// Direct to slide
function currentSlide(n) {
  showSlide(n);
  resetTimer();
}

// Auto slide
function autoSlide() {
  timer = setInterval(() => {
    showSlide(slideIndex + 1);
  }, 3000);
}

// Reset timer when user interacts
function resetTimer() {
  clearInterval(timer);
  autoSlide();
}

// Start
showSlide(slideIndex);
autoSlide();
