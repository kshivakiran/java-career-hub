import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';

const ResumeBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const resumeTemplates = [
    {
      id: 1,
      title: "Senior Java Full-Stack Developer Resume",
      type: "senior",
      description: "Professional template for experienced Java developers with 5+ years of experience",
      difficulty: "Senior Level",
      experience: "5+ Years",
      features: ["Technical Skills Matrix", "Project Highlights", "Leadership Experience", "Certifications"],
      preview: {
        name: "Rajesh Kumar",
        title: "Senior Java Full-Stack Developer",
        location: "Bangalore, Karnataka, India",
        phone: "+91 98765 43210",
        email: "rajesh.kumar@email.com",
        linkedin: "linkedin.com/in/rajeshkumar-java",
        github: "github.com/rajeshkumar-dev",
        summary: "Results-driven Senior Java Full-Stack Developer with 7+ years of experience in designing, developing, and delivering scalable web applications using Java/J2EE technologies. Proven expertise in Spring Boot, React, microservices architecture, and cloud platforms.",
        experience: [
          {
            position: "Senior Java Full-Stack Developer",
            company: "TechCorp Solutions",
            location: "Bangalore, India",
            dates: "March 2021 - Present",
            achievements: [
              "Led development of microservices-based e-commerce platform serving 500K+ users",
              "Architected Spring Boot backend with React frontend, reducing development time by 30%",
              "Mentored team of 5 junior developers, improving code quality by 45%"
            ]
          }
        ],
        skills: {
          "Programming Languages": ["Java 8/11/17", "JavaScript (ES6+)", "TypeScript", "Python"],
          "Frameworks": ["Spring Boot", "React.js", "Angular", "Node.js"],
          "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
          "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Jenkins"]
        },
        education: {
          degree: "Bachelor of Technology in Computer Science Engineering",
          institution: "Indian Institute of Technology (IIT) Mumbai",
          year: "2017"
        }
      }
    },
    {
      id: 2,
      title: "Mid-Level Java Full-Stack Developer Resume",
      type: "mid_level",
      description: "Template for Java developers with 2-5 years of experience focusing on growth and learning",
      difficulty: "Mid Level",
      experience: "2-5 Years",
      features: ["Skills Development", "Project Portfolio", "Learning Journey", "Career Growth"],
      preview: {
        name: "Priya Sharma", 
        title: "Java Full-Stack Developer",
        location: "Pune, Maharashtra, India",
        phone: "+91 87654 32109",
        email: "priya.sharma@email.com",
        linkedin: "linkedin.com/in/priya-sharma-java",
        github: "github.com/priya-sharma-dev",
        summary: "Motivated Java Full-Stack Developer with 3+ years of experience building responsive web applications using Spring Boot and React. Proficient in developing RESTful APIs, implementing authentication systems, and working with cloud platforms.",
        experience: [
          {
            position: "Java Full-Stack Developer",
            company: "WebSolutions India",
            location: "Pune, India", 
            dates: "July 2022 - Present",
            achievements: [
              "Developed 5+ full-stack web applications using Spring Boot and React",
              "Built responsive frontend components improving mobile user experience by 40%",
              "Implemented JWT-based authentication and role-based access control"
            ]
          }
        ],
        skills: {
          "Programming Languages": ["Java 8/11", "JavaScript", "HTML5", "CSS3"],
          "Frameworks": ["Spring Boot", "React.js", "Bootstrap"],
          "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
          "Tools": ["Maven", "Git", "Postman", "Docker"]
        },
        education: {
          degree: "Bachelor of Technology in Computer Science",
          institution: "Delhi Technological University",
          year: "2021"
        }
      }
    },
    {
      id: 3,
      title: "Entry Level Java Developer Resume",
      type: "entry_level",
      description: "Perfect template for fresh graduates and junior developers starting their Java career",
      difficulty: "Entry Level",
      experience: "0-2 Years",
      features: ["Academic Projects", "Internship Experience", "Core Skills", "Learning Mindset"],
      preview: {
        name: "Arjun Patel",
        title: "Junior Java Developer",
        location: "Mumbai, Maharashtra, India",
        phone: "+91 76543 21098",
        email: "arjun.patel@email.com",
        linkedin: "linkedin.com/in/arjun-patel-java",
        github: "github.com/arjun-patel-dev",
        summary: "Enthusiastic Computer Science graduate with strong foundation in Java programming and web development. Completed internship at leading tech company and built 3+ personal projects. Eager to contribute to innovative software development projects.",
        experience: [
          {
            position: "Java Developer Intern",
            company: "StartupTech Solutions",
            location: "Mumbai, India",
            dates: "January 2024 - June 2024",
            achievements: [
              "Developed REST APIs using Spring Boot for customer management system",
              "Created responsive web interfaces using HTML, CSS, and JavaScript",
              "Participated in code reviews and Agile development processes"
            ]
          }
        ],
        skills: {
          "Programming Languages": ["Java", "JavaScript", "Python", "SQL"],
          "Frameworks": ["Spring Boot", "Spring MVC"],
          "Databases": ["MySQL", "H2"],
          "Tools": ["Maven", "Git", "Eclipse", "VS Code"]
        },
        education: {
          degree: "Bachelor of Engineering in Computer Science",
          institution: "University of Mumbai",
          year: "2024"
        }
      }
    }
  ];

  const handlePreview = (template) => {
    setSelectedTemplate(template);
    setShowPreview(true);
  };

  const handleDownload = (template) => {
    // Generate HTML resume content
    const resumeHtml = generateResumeHTML(template);

    // Create blob and download
    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${template.preview.name.replace(' ', '_')}_Resume.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const generateResumeHTML = (template) => {
    const resume = template.preview;
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${resume.name} - ${resume.title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 2px solid #2c3e50;
            margin-bottom: 20px;
        }
        .header h1 {
            color: #2c3e50;
            font-size: 2.5em;
            margin-bottom: 5px;
        }
        .header h2 {
            color: #7f8c8d;
            font-size: 1.3em;
            margin-bottom: 10px;
        }
        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 10px;
        }
        .contact-info span {
            color: #555;
        }
        .section {
            margin-bottom: 25px;
        }
        .section h3 {
            color: #2c3e50;
            font-size: 1.4em;
            border-bottom: 1px solid #bdc3c7;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }
        .experience-item {
            margin-bottom: 20px;
        }
        .experience-header {
            margin-bottom: 8px;
        }
        .position {
            font-weight: bold;
            font-size: 1.1em;
        }
        .company {
            color: #27ae60;
            font-weight: bold;
        }
        .date-location {
            color: #7f8c8d;
            font-style: italic;
        }
        .achievements {
            list-style-type: none;
            padding-left: 0;
        }
        .achievements li {
            margin-bottom: 5px;
            padding-left: 20px;
            position: relative;
        }
        .achievements li:before {
            content: "▶";
            color: #27ae60;
            position: absolute;
            left: 0;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .skill-category {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #27ae60;
        }
        .skill-category h4 {
            color: #2c3e50;
            margin-bottom: 8px;
        }
        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }
        .skill-tag {
            background: #3498db;
            color: white;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 0.9em;
        }
        .summary {
            background: #ecf0f1;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
            border-left: 4px solid #3498db;
        }
        @media print {
            body { padding: 0; }
            .section { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${resume.name}</h1>
        <h2>${resume.title}</h2>
        <div class="contact-info">
            <span>📍 ${resume.location}</span>
            <span>📞 ${resume.phone}</span>
            <span>✉️ ${resume.email}</span>
            <span>💼 ${resume.linkedin}</span>
            <span>💻 ${resume.github}</span>
        </div>
    </div>

    <div class="summary">
        <h3>Professional Summary</h3>
        <p>${resume.summary}</p>
    </div>

    <div class="section">
        <h3>Professional Experience</h3>
        ${resume.experience.map(exp => `
            <div class="experience-item">
                <div class="experience-header">
                    <div class="position">${exp.position}</div>
                    <div class="company">${exp.company} | ${exp.location}</div>
                    <div class="date-location">${exp.dates}</div>
                </div>
                <ul class="achievements">
                    ${exp.achievements.map(achievement => `
                        <li>${achievement}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h3>Technical Skills</h3>
        <div class="skills-grid">
            ${Object.entries(resume.skills).map(([category, skills]) => `
                <div class="skill-category">
                    <h4>${category}</h4>
                    <div class="skill-tags">
                        ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    <div class="section">
        <h3>Education</h3>
        <div class="experience-item">
            <div class="position">${resume.education.degree}</div>
            <div class="company">${resume.education.institution}</div>
            <div class="date-location">Graduated: ${resume.education.year}</div>
        </div>
    </div>
</body>
</html>`;
  };

  return (
    <Container fluid className="p-4">
      <div className="mb-4">
        <h1 className="mb-2">
          <i className="fas fa-file-alt me-2 text-warning"></i>
          Resume Builder
        </h1>
        <p className="text-muted">Choose from professional Java developer resume templates and download instantly</p>
      </div>

      <Row>
        {resumeTemplates.map((template) => (
          <Col lg={4} md={6} key={template.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{template.title}</h5>
                  <Badge 
                    bg={template.type === 'senior' ? 'success' : template.type === 'mid_level' ? 'warning' : 'info'}
                    text={template.type === 'mid_level' ? 'dark' : 'white'}
                  >
                    {template.difficulty}
                  </Badge>
                </div>
              </Card.Header>
              <Card.Body>
                <p className="text-muted mb-3">{template.description}</p>

                <div className="mb-3">
                  <h6 className="text-primary">
                    <i className="fas fa-briefcase me-2"></i>
                    Experience Level: {template.experience}
                  </h6>
                </div>

                <div className="mb-3">
                  <h6>Key Features:</h6>
                  <ul className="list-unstyled">
                    {template.features.map((feature, index) => (
                      <li key={index} className="mb-1">
                        <i className="fas fa-check text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <h6>Sample Content Preview:</h6>
                  <div className="bg-light p-2 rounded">
                    <small>
                      <strong>{template.preview.name}</strong><br />
                      {template.preview.title}<br />
                      <span className="text-muted">{template.preview.location}</span>
                    </small>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="d-grid gap-2 d-md-flex">
                  <Button 
                    variant="outline-primary" 
                    className="flex-fill"
                    onClick={() => handlePreview(template)}
                  >
                    <i className="fas fa-eye me-2"></i>
                    Preview
                  </Button>
                  <Button 
                    variant="success" 
                    className="flex-fill"
                    onClick={() => handleDownload(template)}
                  >
                    <i className="fas fa-download me-2"></i>
                    Download
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Usage Instructions */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <i className="fas fa-info-circle me-2"></i>
                How to Use These Templates
              </h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6>📋 Template Selection Guide:</h6>
                  <ul>
                    <li><strong>Entry Level:</strong> Perfect for fresh graduates and developers with 0-2 years experience</li>
                    <li><strong>Mid Level:</strong> Ideal for developers with 2-5 years experience looking to advance</li>
                    <li><strong>Senior Level:</strong> Designed for experienced developers with 5+ years and leadership roles</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6>🛠️ Customization Tips:</h6>
                  <ul>
                    <li>Replace sample content with your actual experience and projects</li>
                    <li>Adjust skills section based on your expertise</li>
                    <li>Add relevant certifications and achievements</li>
                    <li>Tailor content for specific job applications</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Preview Modal */}
      <Modal show={showPreview} onHide={() => setShowPreview(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fas fa-file-alt me-2"></i>
            Resume Preview: {selectedTemplate?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {selectedTemplate && (
            <div dangerouslySetInnerHTML={{ 
              __html: generateResumeHTML(selectedTemplate) 
            }} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPreview(false)}>
            Close
          </Button>
          <Button 
            variant="success" 
            onClick={() => {
              handleDownload(selectedTemplate);
              setShowPreview(false);
            }}
          >
            <i className="fas fa-download me-2"></i>
            Download This Resume
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ResumeBuilder;