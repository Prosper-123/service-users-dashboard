import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import UserProfile from "../src/pages/UserProfile";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Care Staff Dashboard</h1>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/UserProfile" element={<UserProfile />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 Care Staff Dashboard. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
