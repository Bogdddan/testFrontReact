import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// import Form from './Form/Form';
// import NavBar from './NavBar/NavBar';
import FavoriteList from 'pages/FavoriteList/FavoriteList';
// import NotFound from 'pages/NotFound/NotFound';
// import SponsorCarousel from './Carousel/Carousel';
// import DsFillBookmarkHeartFill from 'react-icons/bs';
import Header from './Header/Header';

function App() {



  return (
    <div>
      {/* <NavBar /> */}
      <Header/>
      <section>
        <FavoriteList
          recipe={{
            id: 1,
            name: 'Steak',
          }}
        />
        <FavoriteList
          recipe={{
            id: 2,
            name: 'Risotto',
          }}
        />
        <FavoriteList
          recipe={{
            id: 3,
            name: 'Pasta',
          }}
        />
      </section>
    </div>
  );
}

export default App;