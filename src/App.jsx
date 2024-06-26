import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </div>
      <SpeedInsights />
    </Router>
  );
}

export default App;
