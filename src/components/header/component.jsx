import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { useCurrentTheme } from '../../contexts/theme';
import { useCurrentUser } from '../../contexts/user';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Popover } from '../popover/component';
import CartContainer from '../cart/container';
export const Header = ({ render, cartRender }) => {
  const { toggleTheme, theme } = useCurrentTheme();
  const { user, login, logout } = useCurrentUser();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const container = document.getElementById('modal-container');

  const isAuthorized = !!user;

  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div>
            {render && (
              <Link to={'/'} className={styles.back}>
                <svg
                  viewBox="64 64 896 896"
                  fill="#fff"
                  width="1em"
                  height="1em"
                >
                  <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                </svg>
                Restaurants
              </Link>
            )}
          </div>
          <div className={styles.logo}>Food</div>
          <div className={styles.switch_container}>
            <button onClick={toggleTheme} className={styles.theme}>
              {theme === 'dark' ? 'Dark' : 'Theme'}
            </button>
            <button
              onClick={() => (isAuthorized ? logout() : login('User522'))}
              className={styles.login}
            >
              {isAuthorized ? `${user}` : 'Login'}
            </button>
            <button
              disabled={cartRender}
              onClick={() => setIsCartVisible(!isCartVisible)}
              className={styles.cart}
            >
              Cart
            </button>
            {isCartVisible &&
              container &&
              createPortal(
                <Popover onClose={() => setIsCartVisible(!isCartVisible)}>
                  <CartContainer />
                </Popover>,
                container
              )}
          </div>
        </div>
      </div>
    </header>
  );
};
