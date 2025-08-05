# API Documentation - Java Career Hub

Complete REST API documentation for the Java Career Hub backend.

## 🔗 Base URL
```
http://localhost:8080/api
```

## 📋 API Overview

The Java Career Hub API provides endpoints for managing projects, calculating salaries, and accessing career development resources.

### Response Format
All API responses follow this standard format:
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { /* response data */ },
  "timestamp": "2024-01-01T12:00:00"
}
```

## 🗂️ Projects API

### Get All Projects
```http
GET /api/projects
```

**Response Example:**
```json
{
  "success": true,
  "message": "Projects retrieved successfully",
  "data": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "description": "Full-stack e-commerce solution...",
      "technologies": ["Spring Boot", "React", "MySQL"],
      "difficulty": "Advanced",
      "duration": "4-6 weeks",
      "learningObjectives": ["Master microservices..."],
      "steps": ["Set up Spring Boot project..."],
      "keyFeatures": ["User authentication..."],
      "createdAt": "2024-01-01T10:00:00",
      "updatedAt": "2024-01-01T10:00:00"
    }
  ]
}
```

### Get Project by ID
```http
GET /api/projects/{id}
```

**Parameters:**
- `id` (path) - Project ID (Long)

**Response:** Single project object

### Filter Projects by Difficulty
```http
GET /api/projects/difficulty/{difficulty}
```

**Parameters:**
- `difficulty` (path) - Difficulty level (String)
  - Valid values: `Beginner`, `Intermediate`, `Advanced`

### Search Projects
```http
GET /api/projects/search?keyword={keyword}
```

**Parameters:**
- `keyword` (query) - Search term (String)

**Example:**
```http
GET /api/projects/search?keyword=spring boot
```

### Create Project
```http
POST /api/projects
```

**Request Body:**
```json
{
  "title": "New Project",
  "description": "Project description",
  "technologies": ["Java", "Spring Boot"],
  "difficulty": "Beginner",
  "duration": "2 weeks",
  "learningObjectives": ["Learn basics..."],
  "steps": ["Step 1...", "Step 2..."],
  "keyFeatures": ["Feature 1..."]
}
```

### Update Project
```http
PUT /api/projects/{id}
```

**Parameters:**
- `id` (path) - Project ID (Long)

**Request Body:** Same as Create Project

### Delete Project
```http
DELETE /api/projects/{id}
```

**Parameters:**
- `id` (path) - Project ID (Long)

## 🏥 Health Check API

### Application Health
```http
GET /actuator/health
```

**Response:**
```json
{
  "status": "UP"
}
```

## 📊 Error Responses

### 404 Not Found
```json
{
  "success": false,
  "message": "Project not found with id: 999",
  "data": null,
  "timestamp": "2024-01-01T12:00:00"
}
```

### 400 Bad Request (Validation Error)
```json
{
  "success": false,
  "message": "Validation failed",
  "data": {
    "title": "Title is required",
    "difficulty": "Difficulty is required"
  },
  "timestamp": "2024-01-01T12:00:00"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "An unexpected error occurred: ...",
  "data": null,
  "timestamp": "2024-01-01T12:00:00"
}
```

## 🧪 Testing with curl

### Get All Projects
```bash
curl -X GET "http://localhost:8080/api/projects" \
  -H "Accept: application/json"
```

### Get Project by ID
```bash
curl -X GET "http://localhost:8080/api/projects/1" \
  -H "Accept: application/json"
```

### Search Projects
```bash
curl -X GET "http://localhost:8080/api/projects/search?keyword=spring" \
  -H "Accept: application/json"
```

### Create Project
```bash
curl -X POST "http://localhost:8080/api/projects" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "title": "Test Project",
    "description": "A test project",
    "technologies": ["Java"],
    "difficulty": "Beginner",
    "duration": "1 week"
  }'
```

## 📖 Interactive Documentation

For interactive API testing, visit:
- **Swagger UI**: http://localhost:8080/swagger-ui.html
- **API Docs**: http://localhost:8080/api-docs

## 🔧 Development Notes

### CORS Configuration
The API is configured to accept requests from:
- `http://localhost:3000` (React development server)

### Content Type
All POST/PUT requests should use:
```
Content-Type: application/json
```

### Date Format
All timestamps use ISO 8601 format:
```
2024-01-01T12:00:00
```

### Validation Rules
- **Title**: Required, non-blank
- **Description**: Required, non-blank
- **Technologies**: Required, at least one technology
- **Difficulty**: Required, must be one of: Beginner, Intermediate, Advanced

---

For more detailed API testing, use the Swagger UI interface available when the backend is running.
