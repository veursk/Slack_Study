import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogIn from '@pages/Login';
import SingUp from '@pages/SingUp/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}
