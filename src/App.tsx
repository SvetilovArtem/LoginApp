import React from 'react';
import General from './pages/General/General';
import Login from './pages/Login';
import './index.css'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/general'} element={<General />} />
      </Routes> 
    </div>
  );
}

export default App;
