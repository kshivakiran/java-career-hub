import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Table } from 'react-bootstrap';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const SalaryCalculator = () => {
  const [formData, setFormData] = useState({
    experience: '',
    location: '',
    skills: '',
    education: ''
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sample salary data - in real app, this would come from backend API
  const salaryData = [
    { experience: "0-1", location: "Bangalore", skills: "Core Java", min_salary: 300000, max_salary: 500000, avg_salary: 400000 },
    { experience: "0-1", location: "Mumbai", skills: "Core Java", min_salary: 350000, max_salary: 550000, avg_salary: 450000 },
    { experience: "0-1", location: "Delhi", skills: "Core Java", min_salary: 320000, max_salary: 520000, avg_salary: 420000 },
    { experience: "1-3", location: "Bangalore", skills: "Spring Boot", min_salary: 500000, max_salary: 800000, avg_salary: 650000 },
    { experience: "1-3", location: "Mumbai", skills: "Spring Boot", min_salary: 550000, max_salary: 850000, avg_salary: 700000 },
    { experience: "1-3", location: "Delhi", skills: "Spring Boot", min_salary: 520000, max_salary: 820000, avg_salary: 670000 },
    { experience: "3-5", location: "Bangalore", skills: "Full Stack", min_salary: 800000, max_salary: 1200000, avg_salary: 1000000 },
    { experience: "3-5", location: "Mumbai", skills: "Full Stack", min_salary: 850000, max_salary: 1300000, avg_salary: 1075000 },
    { experience: "3-5", location: "Delhi", skills: "Full Stack", min_salary: 820000, max_salary: 1250000, avg_salary: 1035000 },
    { experience: "5-8", location: "Bangalore", skills: "Microservices", min_salary: 1200000, max_salary: 1800000, avg_salary: 1500000 },
    { experience: "5-8", location: "Mumbai", skills: "Microservices", min_salary: 1300000, max_salary: 1900000, avg_salary: 1600000 },
    { experience: "5-8", location: "Delhi", skills: "Microservices", min_salary: 1250000, max_salary: 1850000, avg_salary: 1550000 },
    { experience: "8+", location: "Bangalore", skills: "Architect", min_salary: 1800000, max_salary: 3000000, avg_salary: 2400000 },
    { experience: "8+", location: "Mumbai", skills: "Architect", min_salary: 2000000, max_salary: 3200000, avg_salary: 2600000 },
    { experience: "8+", location: "Delhi", skills: "Architect", min_salary: 1900000, max_salary: 3100000, avg_salary: 2500000 }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateSalary = () => {
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const matchingData = salaryData.filter(data => 
        data.experience === formData.experience && 
        data.location === formData.location
      );

      if (matchingData.length > 0) {
        const baseData = matchingData[0];
        let multiplier = 1;

        // Skill-based multiplier
        switch (formData.skills) {
          case 'Spring Boot': multiplier = 1.1; break;
          case 'Full Stack': multiplier = 1.2; break;
          case 'Microservices': multiplier = 1.3; break;
          case 'Architect': multiplier = 1.4; break;
          default: multiplier = 1;
        }

        // Education multiplier
        if (formData.education === 'Masters') multiplier += 0.1;
        if (formData.education === 'PhD') multiplier += 0.2;

        setResults({
          minSalary: Math.round(baseData.min_salary * multiplier),
          maxSalary: Math.round(baseData.max_salary * multiplier),
          avgSalary: Math.round(baseData.avg_salary * multiplier),
          marketData: matchingData
        });
      } else {
        setResults({
          error: "No salary data found for the selected criteria"
        });
      }

      setLoading(false);
    }, 1000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const chartData = results && !results.error ? {
    labels: ['Minimum', 'Average', 'Maximum'],
    datasets: [{
      label: 'Salary Range',
      data: [results.minSalary, results.avgSalary, results.maxSalary],
      backgroundColor: ['#ff6384', '#36a2eb', '#4bc0c0'],
      borderColor: ['#ff6384', '#36a2eb', '#4bc0c0'],
      borderWidth: 2
    }]
  } : null;

  const locationComparisonData = {
    labels: ['Bangalore', 'Mumbai', 'Delhi'],
    datasets: [{
      label: 'Average Salary by Location',
      data: [
        salaryData.filter(d => d.location === 'Bangalore').reduce((acc, curr) => acc + curr.avg_salary, 0) / salaryData.filter(d => d.location === 'Bangalore').length,
        salaryData.filter(d => d.location === 'Mumbai').reduce((acc, curr) => acc + curr.avg_salary, 0) / salaryData.filter(d => d.location === 'Mumbai').length,
        salaryData.filter(d => d.location === 'Delhi').reduce((acc, curr) => acc + curr.avg_salary, 0) / salaryData.filter(d => d.location === 'Delhi').length
      ],
      backgroundColor: ['#28a745', '#007bff', '#ffc107']
    }]
  };

  return (
    <Container fluid className="p-4">
      <div className="mb-4">
        <h1 className="mb-2">
          <i className="fas fa-calculator me-2 text-success"></i>
          Java Developer Salary Calculator
        </h1>
        <p className="text-muted">Get accurate salary estimates based on your experience, location, and skills</p>
      </div>

      <Row>
        <Col lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Header>
              <h5 className="mb-0">
                <i className="fas fa-user-tie me-2"></i>
                Your Details
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Experience Level</Form.Label>
                  <Form.Select 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 Years (Fresher)</option>
                    <option value="1-3">1-3 Years (Junior)</option>
                    <option value="3-5">3-5 Years (Mid-level)</option>
                    <option value="5-8">5-8 Years (Senior)</option>
                    <option value="8+">8+ Years (Lead/Architect)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Select 
                    name="location" 
                    value={formData.location} 
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi/NCR</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Primary Skills</Form.Label>
                  <Form.Select 
                    name="skills" 
                    value={formData.skills} 
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Skills</option>
                    <option value="Core Java">Core Java</option>
                    <option value="Spring Boot">Spring Boot</option>
                    <option value="Full Stack">Full Stack (Java + React)</option>
                    <option value="Microservices">Microservices</option>
                    <option value="Architect">Solution Architect</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Education</Form.Label>
                  <Form.Select 
                    name="education" 
                    value={formData.education} 
                    onChange={handleInputChange}
                  >
                    <option value="">Select Education</option>
                    <option value="Bachelors">Bachelor's Degree</option>
                    <option value="Masters">Master's Degree</option>
                    <option value="PhD">PhD</option>
                  </Form.Select>
                </Form.Group>

                <Button 
                  variant="success" 
                  className="w-100" 
                  onClick={calculateSalary}
                  disabled={!formData.experience || !formData.location || !formData.skills || loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Calculating...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-chart-line me-2"></i>
                      Calculate Salary
                    </>
                  )}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8} className="mb-4">
          {results && (
            <>
              {results.error ? (
                <Alert variant="warning">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  {results.error}
                </Alert>
              ) : (
                <>
                  <Card className="mb-4">
                    <Card.Header>
                      <h5 className="mb-0">
                        <i className="fas fa-money-bill-wave me-2"></i>
                        Your Salary Estimate
                      </h5>
                    </Card.Header>
                    <Card.Body>
                      <Row className="text-center">
                        <Col md={4} className="mb-3">
                          <div className="border rounded p-3">
                            <h4 className="text-danger">{formatCurrency(results.minSalary)}</h4>
                            <small className="text-muted">Minimum</small>
                          </div>
                        </Col>
                        <Col md={4} className="mb-3">
                          <div className="border rounded p-3 bg-success text-white">
                            <h4>{formatCurrency(results.avgSalary)}</h4>
                            <small>Average (Most Likely)</small>
                          </div>
                        </Col>
                        <Col md={4} className="mb-3">
                          <div className="border rounded p-3">
                            <h4 className="text-success">{formatCurrency(results.maxSalary)}</h4>
                            <small className="text-muted">Maximum</small>
                          </div>
                        </Col>
                      </Row>

                      <div className="mt-4">
                        <h6>💡 Salary Insights:</h6>
                        <ul className="list-unstyled">
                          <li><i className="fas fa-check text-success me-2"></i>
                            Based on current market data for {formData.experience} years experience in {formData.location}
                          </li>
                          <li><i className="fas fa-check text-success me-2"></i>
                            {formData.skills} skills are in high demand
                          </li>
                          <li><i className="fas fa-check text-success me-2"></i>
                            Salaries can vary ±20% based on company size and benefits
                          </li>
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>

                  {chartData && (
                    <Row>
                      <Col md={6} className="mb-4">
                        <Card>
                          <Card.Header>
                            <h6 className="mb-0">Salary Range Breakdown</h6>
                          </Card.Header>
                          <Card.Body>
                            <Bar 
                              data={chartData} 
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
                                        return '₹' + (value / 100000).toFixed(0) + 'L';
                                      }
                                    }
                                  }
                                }
                              }} 
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} className="mb-4">
                        <Card>
                          <Card.Header>
                            <h6 className="mb-0">Location Comparison</h6>
                          </Card.Header>
                          <Card.Body>
                            <Pie 
                              data={locationComparisonData}
                              options={{
                                responsive: true,
                                plugins: {
                                  legend: { position: 'bottom' },
                                  tooltip: {
                                    callbacks: {
                                      label: function(context) {
                                        return context.label + ': ₹' + (context.parsed / 100000).toFixed(0) + 'L avg';
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
                  )}
                </>
              )}
            </>
          )}

          {!results && (
            <Card>
              <Card.Body className="text-center py-5">
                <i className="fas fa-calculator fa-3x text-muted mb-3"></i>
                <h5>Enter your details to get salary estimate</h5>
                <p className="text-muted">Fill in the form on the left to calculate your expected salary range</p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <i className="fas fa-info-circle me-2"></i>
                Salary Trends & Tips
              </h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6>📈 Growing Skills (High Demand)</h6>
                  <ul>
                    <li><strong>Microservices:</strong> +25% premium</li>
                    <li><strong>Cloud (AWS/Azure):</strong> +20% premium</li>
                    <li><strong>DevOps (Docker/K8s):</strong> +15% premium</li>
                    <li><strong>React/Angular:</strong> +10% premium</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6>💼 Career Tips</h6>
                  <ul>
                    <li>Switch jobs every 2-3 years for 20-30% hike</li>
                    <li>Get certified in cloud technologies</li>
                    <li>Build full-stack expertise</li>
                    <li>Contribute to open source projects</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SalaryCalculator;