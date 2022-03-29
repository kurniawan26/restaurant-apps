import RestaurantSource from '../../data/restaurant-source';
import createCardList from '../templates/card-template';
import '../../components/slider-section';
import slider from '../../components/slider';
import displayLoading from '../../utils/loading-helper';

const Home = {
  async render() {
    return `
    <slider-section></slider-section>
    <section class="explore-section" id="main-content">
      <h1 class="explore-heading">Explore restaurant</h1>
      <div id="loading"></div>
      <div class="explore-restaurant"></div>
    </section>
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.explore-restaurant');
    const restaurantList = await RestaurantSource.listRestaurant();
    const loader = document.querySelector('#loading');
    const skipToContent = document.querySelector('.skip-to-content');
    skipToContent.addEventListener('click', (event) => {
      event.preventDefault();
      document
        .getElementById('main-content')
        .scrollIntoView({ behavior: 'smooth' });
      skipToContent.blur();
    });
    displayLoading(loader);
    slider();
    setTimeout(() => {
      restaurantList.forEach((restaurant) => {
        const card = createCardList(restaurant);
        restaurantContainer.insertAdjacentHTML('beforeend', card);
      });
      loader.remove();
    }, 1000);
  },
};

export default Home;
