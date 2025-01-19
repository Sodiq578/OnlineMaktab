import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './asosiy/single';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Course from './pages/Course';
import Profile from './pages/Profile';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import News from './pages/News';
import Help from './pages/Help';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Process from './pages/Process';
import Analytics from './pages/Analytics';
import ButtonsTest from './pages/ButtonsTest';

// ProtectedRoute to check if user is authenticated
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');  // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;  // Render children if authenticated
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page and login are not protected */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes - wrapped in ProtectedRoute */}
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/home" element={<Home />} />
          <Route path="/course/:category" element={<Course />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/news" element={<News />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/buttons" element={<ButtonsTest />} />
        </Route>

        {/* Sidebar Route - protected */}
        <Route path="/sidebar" element={<ProtectedRoute><Sidebar /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
