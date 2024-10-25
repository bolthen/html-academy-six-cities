import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../app-route.ts';

export const NotFoundPage: React.FC = () => (
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
          <div className="favorites__title" style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <span>Ooops...</span>
            <div>
              <h2 className="place-card__name">Page not found :(</h2>
              <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
                <span>Return to the main page</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
);
