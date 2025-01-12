import React from "react";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen text-center">
      <Navbar/>
      {/* Header */}
      {/* <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-purple-600">LearnHub</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#courses" className="text-gray-600 hover:text-purple-600">
                Courses
              </a>
            </li>
            <li>
              <a href="#categories" className="text-gray-600 hover:text-purple-600">
                Categories
              </a>
            </li>
            <li>
              <a href="#login" className="text-gray-600 hover:text-purple-600">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header> */}

      {/* Hero Section */}
      <main className="py-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-600">
          Unlock Your Potential with LearnHub
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Discover thousands of courses taught by expert instructors
        </p>
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700">
          Explore Courses
        </button>
      </main>

      {/* Featured Section */}
      <section className="py-12 bg-white">
        <h3 className="text-3xl font-bold text-purple-600">Featured Courses</h3>
        {/* Add featured courses content here */}
      </section>
    </div>
  );
};

export default Home;
