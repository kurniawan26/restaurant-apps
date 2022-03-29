import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import displayLoading from '../../utils/loading-helper';
import createDetailRestTemplate from '../templates/createDetailTemplate';

import '../../components/review-form';
import reviewHandler from '../../utils/review-handler';

const Detail = {
  async render() {
    return `
      <section class="explore-section" id="main-content">
      <h1 class="explore-heading">Detail</h1>
      <div id="loading"></div>
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
      </section>
    <review-form></review-form>
          `;
  },

  async afterRender() {
    scrollTo(0, 0);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const loader = document.querySelector('#loading');
    const buttonSubmit = document.querySelector('.btn--form');
    const reviewContumer = document.getElementById('review');
    const fullName = document.getElementById('full-name');
    const skipToContent = document.querySelector('.skip-to-content');
    skipToContent.addEventListener('click', () => {
      document
        .querySelector('.explore-heading')
        .scrollIntoView({ behavior: 'smooth' });
      skipToContent.blur();
      if (document.querySelector('.explore-heading') === null) {
        document
          .querySelector('#main-content')
          .scrollIntoView({ behavior: 'smooth' });
      }
    });

    displayLoading(loader);
    setTimeout(() => {
      restaurantContainer.innerHTML = createDetailRestTemplate(restaurant);
      loader.remove();
    }, 1000);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });

    reviewHandler(buttonSubmit, url.id, fullName, reviewContumer);
  },
};

export default Detail;
