import React, { useState } from 'react';
import General from './pages/General/General';
import Login from './pages/Login';
import './index.css'
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {
  const isAuth = useSelector((state:RootState) => state.user.isAuth)
  
  return (
    <div className="App">
      {
        isAuth ? <General /> : <Login />
      }
      
    </div>
  );
}

export default App;
