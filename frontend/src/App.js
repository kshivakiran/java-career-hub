import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Components
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Dashboard from './components/Dashboard';
import ProjectList from './components/projects/ProjectList';
import ProjectDetail from './components/projects/ProjectDetail';
import SalaryCalculator from './components/salary/SalaryCalculator';
import TechTrends from './components/trends/TechTrends';
import ResumeBuilder from './components/resume/ResumeBuilder';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Header />
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/salary" element={<SalaryCalculator />} />
                <Route path="/trends" element={<TechTrends />} />
                <Route path="/resume" element={<ResumeBuilder />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;