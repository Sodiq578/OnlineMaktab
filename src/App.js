import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Layout component to wrap common UI
import Home from './pages/Home'; // Home page
import Dashboard from './pages/Dashboard'; // Dashboard page
import Course from './pages/Course'; // Course page with dynamic category
import Profile from './pages/Profile'; // Profile page
import Login from './pages/Login'; // Login page

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* Route for Home page */}
                    <Route path="/" element={<Home />} />
                    
                    {/* Route for Dashboard page */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    
                    {/* Dynamic Route for Courses with categories */}
                    <Route path="/course/:category" element={<Course />} />
                    
                    {/* Route for Profile page */}
                    <Route path="/profile" element={<Profile />} />
                    
                    {/* Route for Login page */}
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
