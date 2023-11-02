import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// import Form from './Form/Form';
import NavBar from './NavBar/NavBar';
// import NotFound from 'pages/NotFound/NotFound';
import SponsorCarousel from './Carousel/Carousel';

function App() {


  return (
    <>
      <NavBar/>
      <SponsorCarousel/>
    </>
  );
}

export default App;