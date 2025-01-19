import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Course from './pages/Course';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import News from './pages/News';
import Help from './pages/Help';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Process from './pages/Process';
import Analytics from './pages/Analytics';
import ButtonsTest from './pages/ButtonsTest';

function ProtectedRoute({ element }) {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? element : null; // Only render the element if authenticated
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/course/:category" element={<ProtectedRoute element={<Course />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/statistics" element={<ProtectedRoute element={<Statistics />} />} />
          <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
          <Route path="/news" element={<ProtectedRoute element={<News />} />} />
          <Route path="/help" element={<ProtectedRoute element={<Help />} />} />
          <Route path="/contacts" element={<ProtectedRoute element={<Contacts />} />} />
          <Route path="/about" element={<ProtectedRoute element={<About />} />} />
          <Route path="/process" element={<ProtectedRoute element={<Process />} />} />
          <Route path="/analytics" element={<ProtectedRoute element={<Analytics />} />} />
          <Route path="/buttons" element={<ProtectedRoute element={<ButtonsTest />} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
