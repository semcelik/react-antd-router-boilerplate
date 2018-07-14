import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import HomePage from './pages/HomePage';

export const ROUTES = [
  {
    icon: 'home',
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    icon: 'shopping-cart',
    path: '/first',
    name: 'First Page',
    component: FirstPage,
  },
  {
    icon: 'customer-service',
    path: '/second',
    name: 'Second Page',
    component: SecondPage,
  },
];
