class SliderSection extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="section">
    <div class="slider">
      <div class="slide">
          <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
            <img src="./images/hero-image_2-large.jpg" alt="hero image">
          </picture>
          <p class="slide-paragraph">
          Website kami akan memandu wisata kuliner kamu
        </p>
      </div>
      <div class="slide">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
        <img src="./images/hero-image_4-large.jpg" alt="hero image">
      </picture>
            <p class="slide-paragraph">
          Kami akan memberikan rekomendasi tempat terbaik buat kamu makan
        </p>
      </div>

      <button class="slider-btn slider-btn--left">&larr;</button>
      <button class="slider-btn slider-btn--right">&rarr;</button>
    </div>
  </section>
`;
  }
}

customElements.define('slider-section', SliderSection);
