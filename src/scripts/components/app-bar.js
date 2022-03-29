class AppBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header">
    
    <button class="skip-to-content">Skip to content</button>
    <h1 class="nav-logo"><a href="#" class="nav-logo-item">🥙Cofood</a></h1>
    <button class="btn-mobile-nav">
      <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
      <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
    </button>
    <nav class="nav">
      <ul class="nav-links">
        <li class="nav-item">
          <a href="#/" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#/favorite" class="nav-link">Favorite</a>
        </li>
        <li class="nav-item">
          <a href="https://github.com/kurniawan26" class="nav-link"
            >About Us</a
          >
        </li>
      </ul>
    </nav>
    </header>`;
  }
}

customElements.define('app-bar', AppBar);
