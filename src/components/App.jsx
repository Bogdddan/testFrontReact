import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// import Form from './Form/Form';
import Home from 'pages/Home/Home';
import ListPage from 'pages/ListPage/ListPage';
import StrengthBar from 'pages/StrengthBar/StrengthBar';
// import NotFound from 'pages/NotFound/NotFound';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Main />} /> */}

        <Route path="*" element={<Navigate to="/" replace />} />
        {/* <Route path='*' element={< NotFound/>} /> */}
        <Route path="listpage" element={<ListPage />} />
        <Route path="strengthbar" element={<StrengthBar />} />
        {/* <Route path='/notfound' element={<NotFound />}/> */}
      </Routes>
    </>
  );
}

export default App;