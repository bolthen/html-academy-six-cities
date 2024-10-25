import React from 'react';
import {Offer} from '../models/offer.ts';

interface IHotelCardProps {
  offer: Offer;
}

function ratingToWidth(rating: number): string {
  const percent = 100 * rating / 5.0;
  return `${percent}%`;
}

export const OfferCard: React.FC<IHotelCardProps> = ({offer}) => (
  <article className="cities__card place-card">
    {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className="place-card__bookmark-button {offer.isFavorite && place-card__bookmark-button--active} button"
          type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: ratingToWidth(offer.rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offer.title}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>

);
