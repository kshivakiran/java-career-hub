import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import projectService from '../services/projectService';

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalProjects: 0,
    beginnerProjects: 0,
    intermediateProjects: 0,
    advancedProjects: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await projectService.getAllProjects();
      const projects = response.data || [];

      setStats({
        totalProjects: projects.length,
        beginnerProjects: projects.filter(p => p.difficulty === 'Beginner').length,
        intermediateProjects: projects.filter(p => p.difficulty === 'Intermediate').length,
        advancedProjects: projects.filter(p => p.difficulty === 'Advanced').length
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const StatCard = ({ title, value, icon, color, onClick }) => (
    <Card className="h-100 shadow-sm" style={{ cursor: onClick ? 'pointer' : 'default' }} onClick={onClick}>
      <Card.Body className="d-flex align-items-center">
        <div className={`rounded-circle p-3 me-3 bg-${color} text-white`}>
          <i className={`${icon} fa-2x`}></i>
        </div>
        <div>
          <h3 className="mb-0">{value}</h3>
          <p className="text-muted mb-0">{title}</p>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <Container fluid className="p-4">
      <div className="mb-4">
        <h1 className="mb-2">Welcome to Java Career Hub</h1>
        <p className="text-muted">Your comprehensive platform for Java career development</p>
      </div>

      <Row className="mb-4">
        <Col md={3} className="mb-3">
          <StatCard
            title="Total Projects"
            value={stats.totalProjects}
            icon="fas fa-project-diagram"
            color="primary"
            onClick={() => navigate('/projects')}
          />
        </Col>
        <Col md={3} className="mb-3">
          <StatCard
            title="Beginner Projects"
            value={stats.beginnerProjects}
            icon="fas fa-seedling"
            color="success"
            onClick={() => navigate('/projects')}
          />
        </Col>
        <Col md={3} className="mb-3">
          <StatCard
            title="Intermediate Projects"
            value={stats.intermediateProjects}
            icon="fas fa-chart-line"
            color="warning"
            onClick={() => navigate('/projects')}
          />
        </Col>
        <Col md={3} className="mb-3">
          <StatCard
            title="Advanced Projects"
            value={stats.advancedProjects}
            icon="fas fa-rocket"
            color="danger"
            onClick={() => navigate('/projects')}
          />
        </Col>
      </Row>

      <Row>
        <Col md={8} className="mb-4">
          <Card className="h-100">
            <Card.Header>
              <h5 className="mb-0">
                <i className="fas fa-info-circle me-2"></i>
                Getting Started
              </h5>
            </Card.Header>
            <Card.Body>
              <h6>Welcome to your Java development journey! 🚀</h6>
              <p>Java Career Hub provides you with everything you need to excel in Java development:</p>
              <ul>
                <li><strong>Project Guides:</strong> {stats.totalProjects} comprehensive projects from beginner to advanced level</li>
                <li><strong>Salary Calculator:</strong> Real market data to plan your career growth</li>
                <li><strong>Technology Trends:</strong> Stay updated with the latest Java ecosystem trends</li>
                <li><strong>Resume Builder:</strong> Professional templates to showcase your skills</li>
              </ul>
              <div className="mt-3">
                <Button variant="success" className="me-2" onClick={() => navigate('/projects')}>
                  <i className="fas fa-play me-2"></i>
                  Start Learning
                </Button>
                <Button variant="outline-primary" onClick={() => navigate('/salary')}>
                  <i className="fas fa-calculator me-2"></i>
                  Calculate Salary
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Header>
              <h5 className="mb-0">
                <i className="fas fa-star me-2"></i>
                Quick Actions
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="outline-success" onClick={() => navigate('/projects')}>
                  <i className="fas fa-code me-2"></i>
                  Browse Projects
                </Button>
                <Button variant="outline-primary" onClick={() => navigate('/trends')}>
                  <i className="fas fa-trending-up me-2"></i>
                  View Tech Trends
                </Button>
                <Button variant="outline-warning" onClick={() => navigate('/resume')}>
                  <i className="fas fa-file-alt me-2"></i>
                  Build Resume
                </Button>
                <Button variant="outline-info" onClick={() => navigate('/salary')}>
                  <i className="fas fa-money-bill-wave me-2"></i>
                  Salary Insights
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;