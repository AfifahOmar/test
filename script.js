document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.slides-wrapper');
  const track = document.querySelector('.slides-track');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (!wrapper || !track || slides.length === 0) return;

  let index = 0;
  let timer = null;
  const total = slides.length;

  function update() {
    const w = wrapper.clientWidth;
    // translate in pixels (robust)
    track.style.transform = `translateX(-${index * w}px)`;
    // update dots
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function goTo(i) {
    index = ((i % total) + total) % total; // wrap properly
    update();
  }

  function next() { goTo(index + 1); resetTimer(); }
  function prev() { goTo(index - 1); resetTimer(); }
  function setCurrent(i) { goTo(i); resetTimer(); }

  function startTimer() {
    timer = setInterval(() => goTo(index + 1), 3000);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  // wire up controls
  prevBtn && prevBtn.addEventListener('click', prev);
  nextBtn && nextBtn.addEventListener('click', next);
  dots.forEach((dot, i) => dot.addEventListener('click', () => setCurrent(i)));

  // adjust when window resized so pixel translate stays correct
  window.addEventListener('resize', () => update());

  // init
  update();
  startTimer();
});
