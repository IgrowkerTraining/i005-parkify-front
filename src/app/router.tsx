import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import HomePage from '../features/parkings/pages/HomePage';
import RegisterPage, { action as registerAction } from '../features/auth/pages/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: 'login', element: <LoginPage /> },
      { path: 'register',
        action: registerAction, 
        element: <RegisterPage /> 
      },
    ],
  },
]);
