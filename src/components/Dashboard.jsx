// Dashboard.js
import React from "react";
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="text-3xl font-bold text-white">
          Welcome to Your Dashboard
        </h1>
        <p className="text-white">Explore and manage your learning journey.</p>
      </header>
      <main className="dashboard-content mt-8 flex flex-wrap justify-center">
        <section className="dashboard-section p-6 m-4 bg-white rounded-lg shadow-md max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <h2 className="text-xl text-black font-semibold mb-4">My Courses</h2>
          <p className="text-gray-700">
            View and track the progress of your enrolled courses.
          </p>
        </section>
        <section className="dashboard-section p-6 m-4 bg-white rounded-lg shadow-md max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <h2 className="text-xl text-black font-semibold mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-700">
            Stay informed about upcoming educational events and webinars.
          </p>
        </section>
      </main>
      <footer className="dashboard-footer mt-8 text-center">
        <p className="text-sm text-gray-500">&copy; 2024 Brain Bridges</p>
      </footer>
    </div>
  );
};

export default Dashboard;
