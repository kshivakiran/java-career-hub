import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import projectService from '../../services/projectService';

const ProjectList = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [projects, selectedDifficulty, searchTerm]);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const response = await projectService.getAllProjects();
      setProjects(response.data || []);
      setError(null);
    } catch (error) {
      setError('Failed to load projects. Please try again.');
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterProjects = () => {
    let filtered = projects;

    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(project => project.difficulty === selectedDifficulty);
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'secondary';
    }
  };

  const ProjectCard = ({ project }) => (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title">{project.title}</h5>
          <Badge bg={getDifficultyColor(project.difficulty)}>
            {project.difficulty}
          </Badge>
        </div>
        <p className="card-text text-muted">{project.description}</p>
        <div className="mb-3">
          <small className="text-muted">Technologies:</small>
          <div className="mt-1">
            {project.technologies.map((tech, index) => (
              <Badge key={index} bg="light" text="dark" className="me-1 mb-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            <i className="fas fa-clock me-1"></i>
            {project.duration}
          </small>
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );

  if (loading) {
    return (
      <Container fluid className="p-4">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading projects...</p>
        </div>
      </Container>
    );
  }

  return (
    <Container fluid className="p-4">
      <div className="mb-4">
        <h1 className="mb-2">Java Full-Stack Projects</h1>
        <p className="text-muted">Explore comprehensive project guides from beginner to advanced level</p>
      </div>

      {error && (
        <Alert variant="danger" className="mb-4">
          <i className="fas fa-exclamation-triangle me-2"></i>
          {error}
          <Button variant="link" className="p-0 ms-2" onClick={loadProjects}>
            Try Again
          </Button>
        </Alert>
      )}

      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Filter by Difficulty</Form.Label>
            <Form.Select 
              value={selectedDifficulty} 
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Search Projects</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by title, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <div className="mb-3">
        <span className="text-muted">
          Showing {filteredProjects.length} of {projects.length} projects
        </span>
      </div>

      <Row>
        {filteredProjects.map((project) => (
          <Col key={project.id} lg={4} md={6} className="mb-4">
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>

      {filteredProjects.length === 0 && !loading && (
        <div className="text-center py-5">
          <i className="fas fa-search fa-3x text-muted mb-3"></i>
          <h4>No projects found</h4>
          <p className="text-muted">
            {searchTerm || selectedDifficulty !== 'All' 
              ? 'Try adjusting your search criteria' 
              : 'No projects available at the moment'}
          </p>
        </div>
      )}
    </Container>
  );
};

export default ProjectList;