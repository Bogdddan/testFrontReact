import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Form from './Form/Form';
import Home from 'pages/Home/Home';
import ListPage from 'pages/ListPage/ListPage';
import StrengthBar from 'pages/StrengthBar/StrengthBar';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Main />} /> */}

        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        <Route path="listpage" element={<ListPage />} />
        <Route path="strengthbar" element={<StrengthBar />} />
      </Routes>
    </>
  );
}

export default App;