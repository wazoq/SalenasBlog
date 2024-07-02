// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
// import './index.css';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import PoemsPage from './Pages/PoemsPage';
// import Contact from './Pages/Contact';
// import ReviewOfAsLong from './Pages/ReviewOfAsLong';
// import NavigatingIstanbul from './Pages/NavigatingIstanbul';
// import ChoosingFashion from './Pages/ChoosingFashion';
// import WhatWillPeople from './Pages/WhatWillPeople';
// import PleasureCompany from './Pages/PleasureCompany';
// import PostGrad from './Pages/PostGrad';
// import PandemicSocialize from './Pages/PandemicSocialize';
// import ComposurePoem from './Pages/ComposurePoem';
// import BeautyPoem from './Pages/BeautyPoem';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter basename={import.meta.env.BASE_URL}>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/poems" element={<PoemsPage />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/blog/review-of-as-long-as-the-lemon-trees-grow" element={<ReviewOfAsLong />} />
//       <Route path="/blog/navigating-istanbul" element={<NavigatingIstanbul />} />
//       <Route path="/blog/choosing-sustainable-fashion" element={<ChoosingFashion />} />
//       <Route path="/blog/what-will-people-say" element={<WhatWillPeople />} />
//       <Route path="/blog/pleasure-of-ones-company" element={<PleasureCompany />} />
//       <Route path="/blog/post-graduation-anxiety" element={<PostGrad />} />
//       <Route path="/blog/a-hrefhttpssalenachaudhrywordpresscom20210831the-pandemic-has-affected-the-way-we-socializethe-pandemic-has-affected-the-way-we-socializea" element={<PandemicSocialize />} />
//       <Route path="/poems/composure" element={<ComposurePoem />} />
//       <Route path="/poems/beauty" element={<BeautyPoem />} />
//     </Routes>
//   </BrowserRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

