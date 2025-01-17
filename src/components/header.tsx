import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../app-route.ts';
import {useAppDispatch} from '../hooks/use-app-dispatch.ts';
import {useAppSelector} from '../hooks/use-app-selector.ts';
import {logoutAction} from '../store/api-actions.ts';
import {getLocalUser} from '../store/user-data/user-data.selectors';
import {getFavorites} from '../store/offers-data/offers-data.selectors';

interface IHeaderProps {
  addNavigation?: boolean;
  isLogoActive?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({addNavigation = false, isLogoActive = false}) => {
  const dispatch = useAppDispatch();
  const localUser = useAppSelector(getLocalUser);
  const favoriteOffers = useAppSelector(getFavorites);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={`header__logo-link ${isLogoActive ? 'header__logo-link--active' : ''}`} to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {addNavigation && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  {localUser ?
                    <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img className="user__avatar" src={localUser.avatarUrl} alt="avatar"/>
                      </div>
                      <span className="header__user-name user__name">{localUser.email}</span>
                      <span className="header__favorite-count">{favoriteOffers.length}</span>
                    </Link>
                    :
                    <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>}
                </li>
                {localUser &&
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to={AppRoute.Main}
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction())
                          .then(() => {
                            window.location.reload();
                          });
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
