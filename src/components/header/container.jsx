import { useLocation } from 'react-router-dom';
import { Header } from './component';

export const HeaderContainer = () => {
  const location = useLocation();

  const shouldRenderLink = () => {
    return location.pathname !== '/';
  };

  const shouldCartRender = () => {
    return location.pathname == '/thanks';
  };

  return <Header render={shouldRenderLink()} cartRender={shouldCartRender()} />;
};
