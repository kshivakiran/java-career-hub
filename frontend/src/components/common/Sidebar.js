import React from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
    { path: '/projects', icon: 'fas fa-project-diagram', label: 'Projects' },
    { path: '/salary', icon: 'fas fa-dollar-sign', label: 'Salary Calculator' },
    { path: '/trends', icon: 'fas fa-chart-line', label: 'Tech Trends' },
    { path: '/resume', icon: 'fas fa-file-alt', label: 'Resume Builder' }
  ];

  return (
    <div className="sidebar bg-success text-white" style={{ width: '250px', minHeight: '100vh' }}>
      <div className="sidebar-header p-3 border-bottom border-light">
        <h4 className="mb-0">
          <i className="fas fa-code me-2"></i>
          Career Hub
        </h4>
      </div>
      <Nav className="flex-column p-3">
        {menuItems.map((item) => (
          <Nav.Link
            key={item.path}
            className={`text-white mb-2 p-2 rounded ${location.pathname === item.path ? 'bg-dark' : ''}`}
            onClick={() => navigate(item.path)}
            style={{ cursor: 'pointer' }}
          >
            <i className={`${item.icon} me-2`}></i>
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;