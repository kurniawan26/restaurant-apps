import API_ENDPOINT from '../../globals/api-endpoint';

const cretateDetailRestTemplate = (restaurant) => `

  <div class="container detail-restaurant">
      <div class="column-container">
        <div class="detail-restaurant__image">
          <img src="${
  API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId
}" alt="${restaurant.name}" class="lazyload" />        
        </div>
      </div>
      <div class="column-container">
        <h1 class="detail-restaurant__name">${restaurant.name}</h1>
        <div class="detail-restaurant__info">
          <div class="detail-restaurant__rating">
            <p class="detail-restaurant__rating-number"><b>Rating</b> : ${
  restaurant.rating
} <span>
              <ion-icon name="star"></ion-icon></span></p>
          </div>
          <div class="detail-restaurant__address">
            <p class="detail-restaurant__address-text">
              <b>Adress</b> : ${restaurant.address} ${restaurant.city}
            </p>
          </div>
          <div class="detail-restaurant__description">
            <p class="detail-restaurant__description-text">
              <b>About</b> : <br> ${restaurant.description}
            </p>
          </div>
          <div class="detail-restaurant__listMenu">
              <ul>    
              <p class="detail-restaurant__listMenu-text"><b>Makanan :</b></p>          
              ${restaurant.menus.foods
    .map(
      (food) => `
                <li class="detail-restaurant__listMenu-item">
                  ${food.name}
                </li>
              `,
    )
    .join('')}
              </ul>
              <ul>
              <p class="detail-restaurant__listMenu-text"><b>Minuman :</b></p>          
              ${restaurant.menus.drinks
    .map(
      (drink) => `
                <li class="detail-restaurant__listMenu-item">
                  ${drink.name}
                </li>
              `,
    )
    .join('')}
              </ul>
          </div>
        </div>
      </div>
      <div class="detail-restaurant__review">
        <h2 class="detail-restaurant__review-title">Reviews</h2>
        <div class="detail-restaurant__review-list">
          ${restaurant.customerReviews
    .map(
      (review) => `
          <div class="detail-restaurant__review-item">
            <p class="detail-restaurant__review-item-user">${review.name}</p>
            <p class="detail-restaurant__review-item-text">${review.review}</p>
            <p class="detail-restaurant__review-item-date">${review.date}</p>
          </div>`,
    )
    .join('')}
        </div>
      </div>

`;

export default cretateDetailRestTemplate;
