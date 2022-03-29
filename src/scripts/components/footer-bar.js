class Footbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer">
        <p class="copyright">
          Copyright &copy; <span class="year">2022</span> by Cofood, Inc. All
          rights reserved by Fauzi Kurniawan.
        </p>
  </footer>`;
  }
}

customElements.define('footer-bar', Footbar);
