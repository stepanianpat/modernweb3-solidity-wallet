/* eslint-disable react/react-in-jsx-scope */
import { Navbar, NavBars, LoginForm, Welcome, Footer, Services, Transactions } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from "react";
import './App.css';

import {Home} from './components';


export default function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <div className="App">
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar handleLoginClick={handleLoginClick} />
        <LoginForm isShowLogin={isShowLogin} />
        <Home />
        <Footer />
      </div>
    </div>
  </div>
  );
}
