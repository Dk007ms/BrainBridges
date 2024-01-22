import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    // Clear the error when the user starts typing again
    switch (field) {
      case "firstName":
        setFirstNameError("");
        break;
      case "lastName":
        setLastNameError("");
        break;
      case "username":
        setUsernameError("");
        break;
      case "password":
        setPasswordError("");
        break;
      default:
        break;
    }
  };

  const handleSignup = () => {
    // Add your signup logic here if needed
    const { firstName, lastName, username, password } = formData;

    // Basic form validation
    if (
      firstName.trim() === "" &&
      lastName.trim() === "" &&
      username.trim() === "" &&
      password.trim() === ""
    ) {
      setFirstNameError("First Name is required.");
      setLastNameError("Last Name is required.");
      setUsernameError("Username is required.");
      setPasswordError("Password is required.");
      return;
    } else if (firstName.trim() === "") {
      setFirstNameError("First Name is required.");
      return;
    } else if (lastName.trim() === "") {
      setLastNameError("Last Name is required.");
      return;
    } else if (username.trim() === "") {
      setUsernameError("Username is required.");
      return;
    } else if (password.trim() === "") {
      setPasswordError("Password is required.");
      return;
    }

    // Additional validation rules can be added here

    // If all validation passes, navigate to "/Dashboard" or any other route
    // You can replace "/Dashboard" with the route you want to navigate to after signup
    navigate("/Dashboard");
  };

  return (
    <div className="signup-form bg-white p-8 max-w-md w-11/12 mx-auto rounded-md shadow-md">
      <label className="block text-lg text-black mb-4">
        First Name:
        <input
          required
          type="text"
          value={formData.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
          className="input-field border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
        />
        {firstNameError && (
          <p className="text-red-500 mt-2">{firstNameError}</p>
        )}
      </label>
      <label className="block text-lg text-black mb-4">
        Last Name:
        <input
          required
          type="text"
          value={formData.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
          className="input-field border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
        />
        {lastNameError && <p className="text-red-500 mt-2">{lastNameError}</p>}
      </label>
      <label className="block text-lg text-black mb-4">
        Username:
        <input
          required
          type="text"
          value={formData.username}
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
          value={formData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          className="input-field border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
        />
        {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
      </label>
      <button
        className="submit-btn cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        onClick={handleSignup}
      >
        Signup
      </button>
    </div>
  );
}
