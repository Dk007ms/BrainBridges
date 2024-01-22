import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Notfound from './components/Notfound';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard' 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App bg-slate-950 w-screen h-screen'>
      <Router>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
