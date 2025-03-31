import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import HomePage from '../features/parkings/pages/HomePage';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/login" element={<LoginPage />} />*/}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
