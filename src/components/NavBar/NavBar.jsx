import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/Home/Home";
import ListPage from "pages/ListPage/ListPage";
import StrengthBar from "pages/StrengthBar/StrengthBar";
// import FavoriteList from "pages/FavoriteList/FavoriteList";
import './NavBar.css';

function NavBar() {
  return (
    <>
      <div className='navigation'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          
          <Route path="listpage" element={<ListPage />} />
          <Route path="strengthbar" element={<StrengthBar />} />
        </Routes>
      </div>
    </>
  )
}

export default NavBar;