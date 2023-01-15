import React, { useState } from 'react';
import General from './pages/General/General';
import Login from './pages/Login';
import './index.css'

function App() {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <div className="App">
      {
        isAuth ? <General /> : <Login />
      }
      
    </div>
  );
}

export default App;
