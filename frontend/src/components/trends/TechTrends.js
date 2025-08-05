import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Badge, Alert } from 'react-bootstrap';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const TechTrends = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredTrends, setFilteredTrends] = useState([]);

  // Sample tech trends data - in real app, this would come from backend API
  const techTrends = [
    { technology: "Spring Boot", popularity: 95, growth: 15.2, job_demand: 89, salary_impact: 25, category: "Backend Framework", description: "Leading Java framework for microservices" },
    { technology: "React", popularity: 92, growth: 12.8, job_demand: 87, salary_impact: 20, category: "Frontend Framework", description: "Most popular frontend library" },
    { technology: "Microservices", popularity: 88, growth: 18.5, job_demand: 85, salary_impact: 30, category: "Architecture", description: "Dominant architectural pattern" },
    { technology: "Docker", popularity: 85, growth: 20.3, job_demand: 82, salary_impact: 22, category: "DevOps", description: "Containerization platform" },
    { technology: "Kubernetes", popularity: 78, growth: 25.7, job_demand: 79, salary_impact: 28, category: "DevOps", description: "Container orchestration leader" },
    { technology: "AWS", popularity: 90, growth: 16.4, job_demand: 88, salary_impact: 26, category: "Cloud", description: "Leading cloud platform" },
    { technology: "Azure", popularity: 75, growth: 22.1, job_demand: 76, salary_impact: 24, category: "Cloud", description: "Microsoft cloud platform" },
    { technology: "MongoDB", popularity: 70, growth: 14.9, job_demand: 72, salary_impact: 15, category: "Database", description: "Popular NoSQL database" },
    { technology: "PostgreSQL", popularity: 82, growth: 11.7, job_demand: 80, salary_impact: 18, category: "Database", description: "Advanced relational database" },
    { technology: "GraphQL", popularity: 65, growth: 28.3, job_demand: 68, salary_impact: 20, category: "API", description: "Modern API query language" },
    { technology: "Angular", popularity: 78, growth: 8.2, job_demand: 75, salary_impact: 18, category: "Frontend Framework", description: "Enterprise frontend framework" },
    { technology: "Vue.js", popularity: 72, growth: 19.6, job_demand: 71, salary_impact: 16, category: "Frontend Framework", description: "Progressive frontend framework" }
  ];

  const categories = ['All', ...new Set(techTrends.map(tech => tech.category))];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredTrends(techTrends);
    } else {
      setFilteredTrends(techTrends.filter(tech => tech.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getTrendColor = (growth) => {
    if (growth >= 20) return 'success';
    if (growth >= 10) return 'warning';
    return 'secondary';
  };

  const getPopularityColor = (popularity) => {
    if (popularity >= 85) return 'success';
    if (popularity >= 70) return 'primary';
    return 'info';
  };

  // Chart data for popularity comparison
  const popularityChartData = {
    labels: filteredTrends.slice(0, 8).map(tech => tech.technology),
    datasets: [{
      label: 'Popularity %',
      data: filteredTrends.slice(0, 8).map(tech => tech.popularity),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
  };

  // Chart data for growth trends
  const growthChartData = {
    labels: filteredTrends.slice(0, 8).map(tech => tech.technology),
    datasets: [{
      label: 'Growth %',
      data: filteredTrends.slice(0, 8).map(tech => tech.growth),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
      fill: true
    }]
  };

  // Salary impact distribution
  const salaryImpactData = {
    labels: ['High Impact (25%+)', 'Medium Impact (15-24%)', 'Low Impact (<15%)'],
    datasets: [{
      data: [
        filteredTrends.filter(tech => tech.salary_impact >= 25).length,
        filteredTrends.filter(tech => tech.salary_impact >= 15 && tech.salary_impact < 25).length,
        filteredTrends.filter(tech => tech.salary_impact < 15).length
      ],
      backgroundColor: ['#28a745', '#ffc107', '#6c757d'],
      borderWidth: 2
    }]
  };

  const topGrowingTechs = [...techTrends].sort((a, b) => b.growth - a.growth).slice(0, 5);
  const highDemandTechs = [...techTrends].sort((a, b) => b.job_demand - a.job_demand).slice(0, 5);

  return (
    <Container fluid className="p-4">
      <div className="mb-4">
        <h1 className="mb-2">
          <i className="fas fa-chart-line me-2 text-primary"></i>
          Java Technology Trends 2024
        </h1>
        <p className="text-muted">Stay updated with the latest trends in Java ecosystem and make informed career decisions</p>
      </div>

      <Row className="mb-4">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Filter by Category</Form.Label>
            <Form.Select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={9}>
          <Alert variant="info">
            <i className="fas fa-info-circle me-2"></i>
            <strong>Data Source:</strong> Based on industry surveys, job postings analysis, and developer feedback from 2024
          </Alert>
        </Col>
      </Row>

      {/* Key Insights Cards */}
      <Row className="mb-4">
        <Col md={4} className="mb-3">
          <Card className="bg-success text-white h-100">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h4>{topGrowingTechs[0]?.technology}</h4>
                  <p className="mb-0">Fastest Growing Tech</p>
                  <small>{topGrowingTechs[0]?.growth}% growth</small>
                </div>
                <i className="fas fa-rocket fa-2x opacity-75"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="bg-primary text-white h-100">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h4>{highDemandTechs[0]?.technology}</h4>
                  <p className="mb-0">Highest Job Demand</p>
                  <small>{highDemandTechs[0]?.job_demand}% demand</small>
                </div>
                <i className="fas fa-briefcase fa-2x opacity-75"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="bg-warning text-dark h-100">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <h4>{filteredTrends.length}</h4>
                  <p className="mb-0">Technologies Tracked</p>
                  <small>In {selectedCategory} category</small>
                </div>
                <i className="fas fa-chart-bar fa-2x opacity-75"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Charts Section */}
      <Row className="mb-4">
        <Col lg={6} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <i className="fas fa-chart-bar me-2"></i>
                Technology Popularity
              </h5>
            </Card.Header>
            <Card.Body>
              <Bar 
                data={popularityChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                    title: { display: false }
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                      ticks: {
                        callback: function(value) {
                          return value + '%';
                        }
                      }
                    }
                  }
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <i className="fas fa-chart-line me-2"></i>
                Growth Trends
              </h5>
            </Card.Header>
            <Card.Body>
              <Line 
                data={growthChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                    title: { display: false }
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        callback: function(value) {
                          return value + '%';
                        }
                      }
                    }
                  }
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8}>
          {/* Technology Cards */}
          <div className="mb-4">
            <h5>
              <i className="fas fa-cogs me-2"></i>
              Technology Details ({filteredTrends.length} technologies)
            </h5>
          </div>
          <Row>
            {filteredTrends.map((tech, index) => (
              <Col md={6} lg={4} key={index} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="mb-0">{tech.technology}</h6>
                      <Badge bg={getTrendColor(tech.growth)}>
                        +{tech.growth}%
                      </Badge>
                    </div>
                    <p className="text-muted small mb-2">{tech.description}</p>
                    <div className="mb-2">
                      <small className="text-muted">Popularity:</small>
                      <div className="progress mb-1" style={{height: '6px'}}>
                        <div 
                          className={`progress-bar bg-${getPopularityColor(tech.popularity)}`}
                          style={{width: `${tech.popularity}%`}}
                        ></div>
                      </div>
                      <small>{tech.popularity}%</small>
                    </div>
                    <div className="mb-2">
                      <small className="text-muted">Job Demand:</small>
                      <div className="progress mb-1" style={{height: '6px'}}>
                        <div 
                          className="progress-bar bg-warning"
                          style={{width: `${tech.job_demand}%`}}
                        ></div>
                      </div>
                      <small>{tech.job_demand}%</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Badge bg="light" text="dark">{tech.category}</Badge>
                      <small className="text-success">
                        <i className="fas fa-dollar-sign me-1"></i>
                        +{tech.salary_impact}%
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col lg={4}>
          {/* Salary Impact Distribution */}
          <Card className="mb-4">
            <Card.Header>
              <h6 className="mb-0">
                <i className="fas fa-money-bill-wave me-2"></i>
                Salary Impact Distribution
              </h6>
            </Card.Header>
            <Card.Body>
              <Doughnut 
                data={salaryImpactData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'bottom' },
                    tooltip: {
                      callbacks: {
                        label: function(context) {
                          return context.label + ': ' + context.parsed + ' technologies';
                        }
                      }
                    }
                  }
                }}
              />
            </Card.Body>
          </Card>

          {/* Top Growing Technologies */}
          <Card className="mb-4">
            <Card.Header>
              <h6 className="mb-0">
                <i className="fas fa-trending-up me-2"></i>
                Top Growing Technologies
              </h6>
            </Card.Header>
            <Card.Body>
              {topGrowingTechs.map((tech, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <strong>{tech.technology}</strong>
                    <br />
                    <small className="text-muted">{tech.category}</small>
                  </div>
                  <Badge bg="success">+{tech.growth}%</Badge>
                </div>
              ))}
            </Card.Body>
          </Card>

          {/* Career Recommendations */}
          <Card>
            <Card.Header>
              <h6 className="mb-0">
                <i className="fas fa-lightbulb me-2"></i>
                Career Recommendations
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <h6 className="text-success">🎯 Must Learn (2024)</h6>
                <ul className="list-unstyled">
                  <li><i className="fas fa-check text-success me-2"></i>Microservices Architecture</li>
                  <li><i className="fas fa-check text-success me-2"></i>Container Technologies</li>
                  <li><i className="fas fa-check text-success me-2"></i>Cloud Platforms (AWS/Azure)</li>
                </ul>
              </div>
              <div className="mb-3">
                <h6 className="text-warning">⚡ High Growth</h6>
                <ul className="list-unstyled">
                  <li><i className="fas fa-arrow-up text-warning me-2"></i>GraphQL</li>
                  <li><i className="fas fa-arrow-up text-warning me-2"></i>Kubernetes</li>
                  <li><i className="fas fa-arrow-up text-warning me-2"></i>Vue.js</li>
                </ul>
              </div>
              <div>
                <h6 className="text-info">💰 Salary Boosters</h6>
                <ul className="list-unstyled">
                  <li><i className="fas fa-dollar-sign text-success me-2"></i>Microservices (+30%)</li>
                  <li><i className="fas fa-dollar-sign text-success me-2"></i>Kubernetes (+28%)</li>
                  <li><i className="fas fa-dollar-sign text-success me-2"></i>AWS (+26%)</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TechTrends;