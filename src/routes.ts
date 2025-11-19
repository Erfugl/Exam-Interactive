import type { JSX } from 'react';
import { createElement } from 'react';
import AboutPage from './pages/AboutPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import ProductsPage from './pages/ProductsPage.tsx';
import StartPage from './pages/StartPage.tsx';

interface Route {
  element: JSX.Element;
  path: string;
  loader?: Function;
  menuLabel?: string;
  index?: number;
  parent?: string;
}

export default [
  AboutPage,
  NotFoundPage,
  ProductsPage,
  StartPage
]

  .map(x => (({ element: createElement(x), ...x.route }) as Route))
  .sort((a, b) => (a.index || 0) - (b.index || 0));