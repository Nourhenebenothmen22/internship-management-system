// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import StudentDashboard from './pages/Student/StudentDashboard/StudentDashboard';
import Home from './pages/Home/Home';
import Layout from './pages/layouts/Layout';
import Unauthorized from './pages/Unauthorized';


function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/student_dashboard"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/unauthorized" element={<Unauthorized/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
