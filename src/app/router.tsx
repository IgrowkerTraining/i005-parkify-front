import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import HomePage from '../features/parkings/pages/HomePage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import LoginPage from '../features/auth/pages/LoginPage'
import LayoutAuth from '../layouts/LayoutAuth';
import RegisterPageWrapper from '../features/auth/pages/RegisterPageWrapper';

export const router = createBrowserRouter([
  {
    element: <LayoutAuth />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPageWrapper /> },
    ],
  },

  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },

    ],
  },
  // {
  //   path: '/',
  //   element: <PublicLayout />,
  //   children: [
  //     { index: true, element: <HomePage /> },
  //     { path: 'login', element: <LoginPage /> },
  //     { path: 'register',
  //       element: <RegisterPage /> 
  //     },
  //   ],
  // },
]);
