const DrawerInitiator = {
  init({ button, drawer, navLink }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    navLink.forEach((element) => {
      element.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('nav-open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('nav-open');
  },
};

export default DrawerInitiator;
