import React from 'react';
import './App.css';
import { Home } from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuemSomos } from './components/quemSomos/QuemSomos';
import { Contato } from './components/contato/Contato';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
};

 export default App;