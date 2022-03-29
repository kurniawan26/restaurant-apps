import FavoriterestaurantIdb from '../../data/favorite-restaurant';
import createCardList from '../templates/card-template';

const Favorite = {
  async render() {
    return `
    <section class="explore-section" id="main-content">
    <h1 class="explore-heading">Favorite Restaurant</h1>
    <div class="explore-restaurant"></div>
    </section>
          `;
  },

  async afterRender() {
    const restaurants = await FavoriterestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('.explore-restaurant');
    const exploreHeading = document.querySelector('.explore-heading');
    const skipToContent = document.querySelector('.skip-to-content');
    skipToContent.addEventListener("click", () => { document.querySelector('#main-content').scrollIntoView({ behavior: 'smooth' }); });
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        const card = createCardList(restaurant);
        restaurantContainer.insertAdjacentHTML('beforeend', card);
      });
    } else {
      exploreHeading.innerHTML = '<h1 class="explore-heading">You have not added Favorite Restaurant</h1>';
    }
  },
};

export default Favorite;
