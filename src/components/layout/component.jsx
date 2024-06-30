import { Outlet, useLocation } from 'react-router-dom';
import { HeaderContainer } from '../header/container';
import { BannerContainer } from '../banner/container';
import { useCurrentTheme } from '../../contexts/theme';
import styles from './styles.module.scss';

export const Layout = () => {
  const { theme } = useCurrentTheme();

  const location = useLocation();
  const shouldRenderLinks = () => {
    const hiddenPaths = ['/thanks', '/order'];
    return !hiddenPaths.includes(location.pathname);
  };

  const render = shouldRenderLinks();

  return (
    <div>
      <div className={`${styles[theme]}`}>
        <HeaderContainer />
        {render && <BannerContainer />}
        <Outlet />
        <div id="modal-container" />
      </div>
    </div>
  );
};
