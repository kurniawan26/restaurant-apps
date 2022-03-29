import API_ENDPOINT from '../../globals/api-endpoint';

const createCard = (restaurant) => `<div class="card">
<div class="card-image">

  <picture>
  <source type="image/webp" srcset="${API_ENDPOINT.RESTAURANT_IMAGE}${
  restaurant.pictureId
}">
  <img src="${API_ENDPOINT.RESTAURANT_IMAGE}${restaurant.pictureId}" alt="${
  restaurant.name
} photo">
  </picture>
</div>
<div class="card-content">
<p class="card-label">${restaurant.city}</p>
    <a class="card-title" href="${`/#/detail/${restaurant.id}`}">
      <span>${restaurant.name}</span>
    </a>
  <p class="card-text">${restaurant.description.substring(0, 100)}</p>
  </p>
  <div class="card-footer">
    <div class="card-footer-item">
    <span>${restaurant.rating}</span>
    <ion-icon name="star"></ion-icon>
    </div>
    <div class="card-footer-item">
    <ion-icon name="navigate"></ion-icon>
      <span>${Math.floor(Math.random(10) * 30)} Km</span>
    </div>
  </div>
</div>
</div>`;

export default createCard;
