// Home.js
import React from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header bg-gray-800 text-white py-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Welcome to Brain Bridges
        </h1>
        <p className="text-lg mt-2">Your Gateway to Learning</p>
      </header>
      <main className="home-content mt-8 flex flex-wrap justify-center">
        <section className="home-section p-6 m-4 bg-white rounded-md shadow-md max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <h2 className="text-2xl text-black font-semibold mb-4">
            Featured Courses
          </h2>
          <p className="text-gray-700">
            Explore our curated collection of top courses.
          </p>
        </section>
        <section className="home-section p-6 m-4 bg-white rounded-md shadow-md max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <h2 className="text-2xl text-black font-semibold mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-700">
            Stay updated with upcoming educational events.
          </p>
        </section>
      </main>
      <footer className="home-footer mt-8 bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">&copy; 2024 Brain Bridges</p>
      </footer>
    </div>
  );
};

export default Home;
