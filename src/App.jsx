import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './Pages/Home';
import About from './Pages/About';
import PoemsPage from './Pages/PoemsPage';
import Contact from './Pages/Contact';
import ReviewOfAsLong from './Pages/ReviewOfAsLong';
import NavigatingIstanbul from './Pages/NavigatingIstanbul';
import ChoosingFashion from './Pages/ChoosingFashion';
import WhatWillPeople from './Pages/WhatWillPeople';
import PleasureCompany from './Pages/PleasureCompany';
import PostGrad from './Pages/PostGrad';
import PandemicSocialize from './Pages/PandemicSocialize';
import ComposurePoem from './Pages/ComposurePoem';
import BeautyPoem from './Pages/BeautyPoem';
import OceanCity from './Pages/OceanCity';
import Skincare from './Pages/Skincare';
import NovBookRec from './Pages/NovBookRec';
import Palestine from './Pages/Palestine';
import MentalHealth from './Pages/MentalHealth';
import PuertoRico from './Pages/PuertoRico'
import './App.css';


ReactGA.initialize('G-L199GYGVZ2');

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/poems" element={<PoemsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/review-of-as-long-as-the-lemon-trees-grow" element={<ReviewOfAsLong />} />
      <Route path="/blog/navigating-istanbul" element={<NavigatingIstanbul />} />
      <Route path="/blog/choosing-sustainable-fashion" element={<ChoosingFashion />} />
      <Route path="/blog/what-will-people-say" element={<WhatWillPeople />} />
      <Route path="/blog/pleasure-of-ones-company" element={<PleasureCompany />} />
      <Route path="/blog/post-graduation-anxiety" element={<PostGrad />} />
      <Route path="/blog/a-hrefhttpssalenachaudhrywordpresscom20210831the-pandemic-has-affected-the-way-we-socializethe-pandemic-has-affected-the-way-we-socializea" element={<PandemicSocialize />} />
      <Route path="/poems/composure" element={<ComposurePoem />} />
      <Route path="/poems/beauty" element={<BeautyPoem />} />
      <Route path="/blog/ocean-city" element={<OceanCity />} />
      <Route path="/blog/skincare" element={<Skincare />} />
      <Route path="/blog/NovBookRec" element={<NovBookRec />} />
      <Route path="/blog/palestine" element={<Palestine />} />
      <Route path="/blog/mental-health" element={<MentalHealth />} />
      <Route path="/blog/puerto-rico" element={<PuertoRico />} />

    </Routes>
  );
}

export default App;
