import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContent from './components/HomeContent';
import Weather from './components/Weather';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
