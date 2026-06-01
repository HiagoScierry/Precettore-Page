import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import MentoriaHubPage from '../pages/MentoriaHubPage';
import MentoriaCode from '../pages/MentoriaCode';
import QuemSomos from '../pages/QuemSomos';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mentoria' element={<MentoriaHubPage />} />
        <Route path='/mentoria-code' element={<MentoriaCode />} />
        <Route path='/contato' element={<ContactPage />} />
        <Route path='/quem-somos' element={<QuemSomos />} />

        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
