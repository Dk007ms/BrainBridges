import React, { useState } from "react";
import {
  Link,
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
import Signout from "./components/Signout";
import Dashboard from "./components/Dashboard";
import Mainheader from "./components/Mainheader";
import Contacts from "./components/Contacts";
import "./App.css"; // Import your CSS file
import { toast } from "react-toastify";
import "./components/toaststyles.css";
import myimage from "./assets/ai-brain.png";

function App() {
  const [isActive, setisActive] = useState(false);

  const handleSignout = () => {
    toast.dismiss();

    toast("👋 Comeback Soon !", {
      position: "top-center",
      autoClose: 2000,
      bodyClassName: "toastbody",
      className: "toastbody",
      style: {
        borderRadius: "1rem",
      },
    });
    setisActive(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <NavLink className="logo bg-transparent" to="/">
          <img className="logo-img" src={myimage} alt="logo" />
        </NavLink>

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
          {!isActive ? (
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          ) : null}

          {!isActive ? (
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          ) : null}
          {isActive ? (
            <NavLink className="nav-link" to="/Dashboard">
              Dashboard
            </NavLink>
          ) : null}
          {isActive ? (
            <Link className="nav-link" to="/" onClick={handleSignout}>
              Signout
            </Link>
          ) : null}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Mainheader />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={<Login isActive={isActive} setisActive={setisActive} />}
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/signup"
            element={<Signup isActive={isActive} setisActive={setisActive} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Signout" element={<Signout />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
