import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./toaststyles.css";

export default function Login(props) {
  let isActive = props.isActive;
  let setisActive = props.setisActive;

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (field, value) => {
    if (field === "username") {
      setUsername(value);
      setUsernameError(""); // Clear the error when the user starts typing again
    } else if (field === "password") {
      setPassword(value);
      setPasswordError(""); // Clear the error when the user starts typing again
    }
  };

  const handleLogin = () => {
    // Add your login logic here if needed
    if (username.trim() === "" && password.trim() === "") {
      setUsernameError("Username is required.");
      setPasswordError("Password is required.");
      toast.error("Username and Password missing.", {
        position: "top-center",
        autoClose: 2000,
        draggable: true,
        bodyClassName: "toastbody",
        className: "toastbody",
        style: {
          borderRadius: "1rem",
        },
      });
      return;
    }
    // Basic form validation
    else if (username.trim() === "") {
      setUsernameError("Username is required.");
      toast.error("Username is required.", {
        position: "top-center",
        autoClose: 2000,
        draggable: true,
        bodyClassName: "toastbody",
        className: "toastbody",
        style: {
          borderRadius: "1rem",
        },
      });
      return;
    } else if (password.trim() === "") {
      setPasswordError("Password is required.");
      toast.error("Password is required.", {
        position: "top-center",
        autoClose: 2000,
        draggable: true,
        bodyClassName: "toastbody",
        className: "toastbody",
        style: {
          borderRadius: "1rem",
        },
      });
      return;
    } else {
      toast.success("Logged in Successfully", {
        position: "top-center",
        autoClose: 2000,
        draggable: true,
        bodyClassName: "toastbody",
        className: "toastbody",
        style: {
          borderRadius: "1rem",
        },
      });

      setisActive((prev) => (prev = true));
      navigate("/Dashboard");
    }
  };

  return (
    <div className="login-form bg-white p-8 max-w-md w-11/12 mx-auto rounded-md shadow-md">
      <label className="block text-lg text-black mb-4">
        Username:
        <input
          required
          type="text"
          value={username}
          onChange={(e) => handleInputChange("username", e.target.value)}
          className="input-field border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
        />
        {usernameError && <p className="text-red-500 mt-2">{usernameError}</p>}
      </label>
      <label className="block text-lg text-black mb-4">
        Password:
        <input
          required
          type="password"
          value={password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          className="input-field border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
        />
        {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
      </label>
      <button
        className="submit-btn cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
