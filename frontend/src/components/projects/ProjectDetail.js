import React, { useState, useEffect } from 'react';
import { Container, Card, Badge, Button, Alert, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import projectService from '../../services/projectService';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProject();
  }, [id]);

  const loadProject = async () => {
    try {
      setLoading(true);
      const response = await projectService.getProjectById(id);
      setProject(response.data);
      setError(null);
    } catch (error) {
      setError('Project not found or failed to load.');
      console.error('Error loading project:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'secondary';
    }
  };

  if (loading) {
    return (
      <Container fluid className="p-4">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading project details...</p>
        </div>
      </Container>
    );
  }

  if (error || !project) {
    return (
      <Container fluid className="p-4">
        <Alert variant="danger">
          <i className="fas fa-exclamation-triangle me-2"></i>
          {error || 'Project not found'}
          <div className="mt-2">
            <Button variant="outline-primary" onClick={() => navigate('/projects')}>
              <i className="fas fa-arrow-left me-2"></i>
              Back to Projects
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="p-4">
      <div className="mb-3">
        <Button variant="outline-secondary" onClick={() => navigate('/projects')}>
          <i className="fas fa-arrow-left me-2"></i>
          Back to Projects
        </Button>
      </div>

      <Card className="mb-4">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">{project.title}</h2>
            <Badge bg={getDifficultyColor(project.difficulty)} className="fs-6">
              {project.difficulty}
            </Badge>
          </div>
        </Card.Header>
        <Card.Body>
          <p className="lead">{project.description}</p>

          <Row className="mb-4">
            <Col md={6}>
              <h6>Duration</h6>
              <p><i className="fas fa-clock me-2"></i>{project.duration}</p>
            </Col>
            <Col md={6}>
              <h6>Technologies Used</h6>
              <div>
                {project.technologies.map((tech, index) => (
                  <Badge key={index} bg="primary" className="me-1 mb-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>

          {project.learningObjectives && project.learningObjectives.length > 0 && (
            <div className="mb-4">
              <h5>Learning Objectives</h5>
              <ul>
                {project.learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
          )}

          {project.steps && project.steps.length > 0 && (
            <div className="mb-4">
              <h5>Implementation Steps</h5>
              <ol>
                {project.steps.map((step, index) => (
                  <li key={index} className="mb-2">{step}</li>
                ))}
              </ol>
            </div>
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-4">
              <h5>Key Features</h5>
              <ul>
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4">
            <Button variant="success" className="me-2">
              <i className="fas fa-code me-2"></i>
              Start Project
            </Button>
            <Button variant="outline-primary">
              <i className="fas fa-bookmark me-2"></i>
              Save for Later
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectDetail;