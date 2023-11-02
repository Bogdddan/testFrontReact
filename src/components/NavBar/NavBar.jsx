import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/Home/Home";
import ListPage from "pages/ListPage/ListPage";
import StrengthBar from "pages/StrengthBar/StrengthBar";
import './NavBar.css';

function NavBar() {
  return (
    <>
      <div className='navigation'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route index element={<Main />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* <Route path='*' element={< NotFound/>} /> */}
          <Route path="listpage" element={<ListPage />} />
          <Route path="strengthbar" element={<StrengthBar />} />
          {/* <Route path='/notfound' element={<NotFound />}/> */}
        </Routes>
      </div>
    </>
  )
}

export default NavBar;