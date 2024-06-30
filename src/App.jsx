import { Restaurants } from './components/restaurants/component';
import { Layout } from './components/layout/component';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { RestaurantContainer } from './components/restaurant/container';
import { MenuContainer } from './components/menu/container';
import { RestaurantReviewContainer } from './components/restaurant-review/container';
import { ThemeContextProvider } from './contexts/theme';
import { UserContextProvider } from './contexts/user';
import { Order } from './components/order/component';
import { ThanksPage } from './components/thanks-page/component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Restaurants />,
      },
      {
        path: ':restaurantId',
        element: <RestaurantContainer />,
        children: [
          { index: true, element: <Navigate to="./menu" replace /> },
          { path: 'menu', element: <MenuContainer /> },
          { path: 'review', element: <RestaurantReviewContainer /> },
        ],
      },
      {
        path: '/order',
        element: <Order />,
      },
      {
        path: 'thanks',
        element: <ThanksPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
