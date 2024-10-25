import React from 'react';
import {Link} from 'react-router-dom';
import {OfferShortInfo} from '../../models/offer-short-info.ts';
import {AppRoute} from '../../app-route.ts';
import {FavoritesList} from './favorites-list.tsx';

interface IFavoritesPageProps {
  offers: OfferShortInfo[];
}

export const FavoritesPage: React.FC<IFavoritesPageProps> = ({offers}) => (
  <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <Link className="header__favorite-count" to={AppRoute.Favorites}>3</Link>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <FavoritesList offers={offers}/>
          </ul>
        </section>
      </div>
    </main>
    <footer className="footer container">
      <Link className="footer__logo-link" to={AppRoute.Main}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </Link>
    </footer>
  </div>
);