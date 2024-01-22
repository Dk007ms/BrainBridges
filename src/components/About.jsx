// About.js
import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content bg-white p-8 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          About Brain Bridges
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Welcome to Brain Bridges, your dedicated platform for online learning.
          We believe that education is the key to personal and professional
          growth. Our mission is to provide a transformative learning experience
          that goes beyond traditional boundaries.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          At Brain Bridges, we offer a diverse range of courses, designed to
          meet the needs of learners at every stage. Our expert instructors and
          interactive learning materials ensure that you acquire the skills and
          knowledge necessary to succeed in a dynamic world.
        </p>
      </div>
      <footer className="about-footer mt-8 text-center">
        <p className="text-sm text-gray-500">&copy; 2024 Brain Bridges</p>
      </footer>
    </div>
  );
};

export default About;
