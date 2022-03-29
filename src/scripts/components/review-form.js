class Reviews extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="cta-section" id="cta">
    <div class="container-form">
      <div class="cta">
        <div class="cta-text-box">
          <h2 class="heading-cta">Pendapat kamu tentang toko kami?</h2>

          <form class="cta-form" name="review-form">
            <div>
              <label for="full-name">Nama Lengkap</label>
              <input
                id="full-name"
                type="text"
                placeholder="John Smith"
                name="full-name"
                required
              />
            </div>

            <div>
              <label for="review">Review Kamu</label>
              <input
                id="review"
                type="text-area"
                placeholder="Masukan testimoni kamu"
                name="review"
                required
              />
            </div>
            <button type="submit" class="btn btn--form">Kirim Review</button>
          </form>
        </div>
      </div>
    </div>
  </section>`;
  }
}

customElements.define('review-form', Reviews);
