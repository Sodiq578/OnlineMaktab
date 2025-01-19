import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <div className="text-2xl font-bold">MyWebsite</div>
          <button onClick={handleLogin} className="bg-white text-blue-600 px-4 py-2 rounded-lg">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,water')" }}>
        <h1 className="text-5xl font-semibold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-6">Explore amazing content and join us now!</p>
        <button className="bg-blue-600 px-6 py-3 rounded-full text-white">Get Started</button>
      </section>

      {/* Carousel Section */}
      <section className="my-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Popular Products</h2>
        <div className="carousel flex overflow-x-auto gap-4">
          <div className="w-64 h-80 bg-gray-200 rounded-lg shadow-lg flex-none">
            <img src="https://via.placeholder.com/250" alt="Product 1" className="w-full h-3/4 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Product 1</h3>
              <p className="text-gray-700">This is a description of Product 1.</p>
            </div>
          </div>
          <div className="w-64 h-80 bg-gray-200 rounded-lg shadow-lg flex-none">
            <img src="https://via.placeholder.com/250" alt="Product 2" className="w-full h-3/4 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Product 2</h3>
              <p className="text-gray-700">This is a description of Product 2.</p>
            </div>
          </div>
          <div className="w-64 h-80 bg-gray-200 rounded-lg shadow-lg flex-none">
            <img src="https://via.placeholder.com/250" alt="Product 3" className="w-full h-3/4 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Product 3</h3>
              <p className="text-gray-700">This is a description of Product 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-8">We are a team of passionate developers creating amazing products to help you succeed.</p>
          <button className="bg-blue-600 px-6 py-3 rounded-full text-white">Learn More</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
