import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import AuthorizedLayout from '../layout';
import { Routes } from './routes';

const Search = lazy(() => import('../pages/Search'));
const Movie = lazy(() => import('../pages/Movie'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <AuthorizedLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </AuthorizedLayout>
    ),
    children: [
      { index: true, element: <Search /> },
      { path: Routes.MOVIE, element: <Movie /> },
    ],
  },
];

export default routes;
