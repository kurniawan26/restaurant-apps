import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/queries.css';

import './components/app-bar';
import './components/footer-bar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.btn-mobile-nav'),
  drawer: document.querySelector('.header'),
  content: document.querySelector('#mainContent'),
  navLink: document.querySelectorAll('.nav-link'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
