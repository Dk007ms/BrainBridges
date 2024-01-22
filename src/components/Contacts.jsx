// Contact.js
import React from "react";
import "./Contacts.css"; // Import the CSS file

const Contacts = () => {
  return (
    <div className="contact-container">
      <header className="contact-header bg-gray-800 text-white py-8 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2">We're Here to Assist You</p>
      </header>
      <main className="contact-content mt-8 p-6 bg-white rounded-md shadow-md max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <p className="text-gray-700 leading-relaxed">
          Have questions or need assistance? Feel free to reach out to us using
          the contact details below:
        </p>
        <ul className="mt-4 text-black">
          <li>Email: info@brainbridges.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Learning Street, Cityville, Country</li>
        </ul>
      </main>
      <footer className="contact-footer mt-8 bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">&copy; 2024 Brain Bridges</p>
      </footer>
    </div>
  );
};

export default Contacts;
