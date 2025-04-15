import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import HomePage from '../features/parkings/pages/HomePage';
import LoginPage from '../features/auth/pages/LoginPage';
import LayoutAuth from '../layouts/LayoutAuth';
import RegisterPageWrapper from '../features/auth/pages/RegisterPageWrapper';
import ProfileOwnerPage from '../features/parkings/pages/ProfileOwnerPage';
import ChangePasswordPage from '../features/parkings/pages/ChangePasswordPage';
import DeleteAccountPage from '../features/parkings/pages/DeleteAccountPage';
import PrivateRoute from '../features/auth/components/PrivateRoute';
import PublicOnlyRoute from '../features/auth/components/PublicOnlyRoute';
import MapLayout from '../layouts/MapLayout';
import MapPage from '../features/maps/pages/MapPage';
import ParkingProfilePage from '../features/parkings/pages/ParkingProfilePage';

const routes = [
  {
    element: <LayoutAuth />,
    children: [
      {
        element: <PublicOnlyRoute />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPageWrapper /> },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "parkings/:id",
        element: <ParkingProfilePage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          { path: "profile", element: <ProfileOwnerPage /> },
          { path: "cambiar-password", element: <ChangePasswordPage /> },
          { path: "eliminar-cuenta", element: <DeleteAccountPage /> },
        ],
      },
    ],
  },
  {
    element: <MapLayout />,
    children: [
      { path: "mapa", element: <MapPage /> },
    ],
  },
];

const useHashRouter = import.meta.env.VITE_ROUTER_MODE === 'hash';

export const router = useHashRouter ? createHashRouter(routes) : createBrowserRouter(routes);

