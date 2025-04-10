import { createBrowserRouter } from 'react-router-dom';
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

export const router = createBrowserRouter([
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
        element: <PrivateRoute />,
        children: [
          { path: "profile", element: <ProfileOwnerPage /> },
          { path: "cambiar-password", element: <ChangePasswordPage /> },
          { path: "eliminar-cuenta", element: <DeleteAccountPage /> },
        ],
      },
    ],
  },
]);
