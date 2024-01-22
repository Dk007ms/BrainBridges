import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Notfound from "./components/Notfound";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Mainheader from "./components/Mainheader";
import Contacts from "./components/Contacts";
import "./App.css"; // Import your CSS file

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img
            className="logo-img"
            src="./src/assets/ai-brain.png"
            alt="logo"
          />
        </div>

        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/contacts">
            Contacts
          </NavLink>
        </div>

        <div className="login-signup">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Mainheader />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
