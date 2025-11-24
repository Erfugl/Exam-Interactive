import type { RouteObject, Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import App from './App.tsx';
import './scss/index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes as RouteObject[]
  }
]);

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);