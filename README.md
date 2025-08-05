# Java Career Hub - Full Stack Application

🚀 **Complete Java Full Stack Platform for Career Development**

Java Career Hub is a comprehensive, production-grade web application built with **Spring Boot backend** and **React frontend**. This platform serves as a complete career development solution for Java developers at all skill levels.

## 🎯 Project Overview

- **Backend**: Spring Boot 3.2 with Java 17
- **Frontend**: React 18 with modern JavaScript
- **Database**: H2 (development) / MySQL (production)
- **Architecture**: RESTful API with responsive SPA frontend

## ✨ Features

- 📚 **7 Comprehensive Project Guides** (Beginner to Advanced)
- 💰 **Salary Calculator** with real market data
- 📈 **Technology Trends Dashboard**
- 📄 **Professional Resume Templates**
- 🔍 **Project Search and Filtering**
- 📱 **Responsive Design** for all devices

## 🛠️ Technology Stack

### Backend
- Java 17
- Spring Boot 3.2
- Spring Data JPA
- H2 Database (development)
- Maven
- OpenAPI/Swagger

### Frontend
- React 18
- React Router
- Bootstrap 5
- Axios
- Chart.js
- Font Awesome Icons

## 🚀 Quick Start

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd java-career-hub-fullstack
```

### 2. Start Backend (Terminal 1)
```bash
cd backend
./mvnw spring-boot:run
```
Backend will start on: http://localhost:8080

### 3. Start Frontend (Terminal 2)
```bash
cd frontend
npm install
npm start
```
Frontend will start on: http://localhost:3000

### 4. Access the Application
- **Main Application**: http://localhost:3000
- **API Documentation**: http://localhost:8080/swagger-ui.html
- **H2 Console**: http://localhost:8080/h2-console

## 📋 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get project by ID
- `GET /api/projects/difficulty/{difficulty}` - Filter by difficulty
- `GET /api/projects/search?keyword={keyword}` - Search projects

### Health Check
- `GET /actuator/health` - Application health status

## 🔧 Development Setup

### IDE Setup

#### For VS Code:
1. Install Java Extension Pack
2. Install Spring Boot Extension Pack
3. Install ES7+ React/Redux/React-Native snippets
4. Open project root folder in VS Code

#### For Eclipse:
1. Import as "Existing Maven Project" (backend)
2. Use File > Import > General > Existing Projects (frontend)
3. Install Spring Tools 4 plugin

### Database Configuration

#### Development (H2):
- No configuration needed
- Access H2 console: http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:mem:javacareerhub`
- Username: `sa`
- Password: (empty)

#### Production (MySQL):
Update `application-prod.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/java_career_hub
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## 📁 Project Structure

```
java-career-hub-fullstack/
├── backend/                    # Spring Boot API
│   ├── src/main/java/
│   │   └── com/javacareerhub/
│   │       ├── controller/     # REST controllers
│   │       ├── service/        # Business logic
│   │       ├── model/          # JPA entities
│   │       ├── repository/     # Data access
│   │       ├── dto/            # Data transfer objects
│   │       ├── config/         # Configuration
│   │       └── exception/      # Exception handling
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── data/               # Sample data
│   └── pom.xml
└── frontend/                   # React SPA
    ├── public/
    ├── src/
    │   ├── components/         # React components
    │   ├── services/           # API services
    │   ├── styles/             # CSS files
    │   └── utils/              # Utilities
    └── package.json
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
./mvnw test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### API Testing
- Use Postman collection (if provided)
- Access Swagger UI: http://localhost:8080/swagger-ui.html

## 📦 Building for Production

### Backend
```bash
cd backend
./mvnw clean package
java -jar target/java-career-hub-backend-1.0.0.jar
```

### Frontend
```bash
cd frontend
npm run build
# Deploy build/ folder to web server
```

## 🚢 Deployment

### Local Deployment
1. Build both applications
2. Run backend JAR file
3. Serve frontend build folder

### Cloud Deployment
- **Heroku**: Deploy backend as Java app, frontend as static site
- **AWS**: Use EC2 for backend, S3 + CloudFront for frontend
- **Azure**: App Service for backend, Static Web Apps for frontend

## 🔍 Troubleshooting

### Common Issues

1. **Backend won't start**
   - Check Java version: `java -version`
   - Verify port 8080 is available
   - Check application logs

2. **Frontend won't start**
   - Check Node.js version: `node -v`
   - Delete node_modules and run `npm install`
   - Verify port 3000 is available

3. **API calls failing**
   - Ensure backend is running on port 8080
   - Check CORS configuration
   - Verify proxy setting in package.json

### Getting Help
- Check application logs
- Visit API documentation at /swagger-ui.html
- Review H2 console for database issues

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎉 Features in Detail

### Project Guides
- **Beginner**: Student Grade Calculator, Personal Expense Tracker
- **Intermediate**: Task Management System, Blog Platform, Inventory System
- **Advanced**: E-Commerce Platform, Real-time Chat Application

### Technology Integration
- Modern Java development with Spring Boot
- React with hooks and functional components
- RESTful API design with proper error handling
- Responsive design with Bootstrap
- Database integration with JPA/Hibernate

### Professional Features
- API documentation with OpenAPI/Swagger
- Global exception handling
- Input validation
- CORS configuration
- Development and production profiles

---

**Happy Coding! 🚀☕**

For questions or support, please open an issue in the GitHub repository.
