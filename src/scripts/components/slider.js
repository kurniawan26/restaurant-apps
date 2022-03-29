/// /////////////////////////////////////
// Function FOR SLIDING IMAGE
const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider-btn--left');
  const btnRight = document.querySelector('.slider-btn--right');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Function for creating on the slider
  const goToSlide = (slide) => {
    slides.forEach(
      (sliderEach, index) => (sliderEach.style.transform = `translateX(${100 * (index - slide)}%)`),
    );
  };

  // Next slide
  const nextSlide = () => {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide += 1;
    }

    goToSlide(curSlide);
  };

  const prevSlide = () => {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide -= 1;
    }
    goToSlide(curSlide);
  };

  const init = () => {
    goToSlide(0);
  };
  init();

  // Event handlers for clicking slide button
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
};
export default slider;
