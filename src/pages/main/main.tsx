﻿import React, {useState} from 'react';
import {OffersList} from './offers-list.tsx';
import {OfferShortInfo} from '../../models/offer-short-info.ts';
import {Header} from '../../components/header.tsx';
import {CITIES} from '../../shared/const.ts';
import {Map} from '../../components/map.tsx';
import {OfferBase} from '../../models/offer-base.ts';

interface IMainPageProps {
  offers: OfferShortInfo[];
}

export const MainPage: React.FC<IMainPageProps> = ({offers}) => {
  const [activeCard, setActiveCard] = useState<OfferBase | null>(null);

  return (
    <div className="page page--gray page--main">
      <Header addNavigation isLogoActive/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li className="locations__item" key={city.name}>
                  <a className="locations__item-link tabs__item" href="#">
                    <span>{city.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>

              <OffersList offers={offers.filter((x) => x.city.name === 'Amsterdam')} setActiveOffer={setActiveCard}/>
            </section>
            <div className="cities__right-section">
              <Map city={CITIES[3]} offersLocation={offers} activeLocationId={activeCard?.id}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
