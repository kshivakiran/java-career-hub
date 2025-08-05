# Deployment Guide - Java Career Hub

Complete guide for deploying Java Career Hub to various environments.

## 🎯 Deployment Options

### 1. Local Production Build
### 2. Heroku Deployment
### 3. AWS Deployment
### 4. Docker Deployment

## 🏠 Local Production Build

### Backend
```bash
cd backend
./mvnw clean package -Dspring.profiles.active=prod
java -jar target/java-career-hub-backend-1.0.0.jar
```

### Frontend
```bash
cd frontend
npm run build
npx serve -s build -l 3000
```

## 🚀 Heroku Deployment

### Prerequisites
- Heroku account
- Heroku CLI installed

### Backend Deployment
1. **Create Heroku App**:
```bash
cd backend
heroku create your-app-name-backend
```

2. **Add Environment Variables**:
```bash
heroku config:set SPRING_PROFILES_ACTIVE=prod
heroku config:set JAVA_TOOL_OPTIONS="-Xmx300m -Xss512k -XX:CICompilerCount=2 -Dfile.encoding=UTF-8"
```

3. **Deploy**:
```bash
git init
git add .
git commit -m "Initial commit"
heroku git:remote -a your-app-name-backend
git push heroku main
```

### Frontend Deployment
1. **Create Heroku App**:
```bash
cd frontend
heroku create your-app-name-frontend
```

2. **Add Buildpack**:
```bash
heroku buildpacks:set mars/create-react-app
```

3. **Set Environment Variable**:
```bash
heroku config:set REACT_APP_API_URL=https://your-app-name-backend.herokuapp.com/api
```

4. **Deploy**:
```bash
git init
git add .
git commit -m "Initial commit"
heroku git:remote -a your-app-name-frontend
git push heroku main
```

## ☁️ AWS Deployment

### Backend (Elastic Beanstalk)
1. **Create Application**:
   - Platform: Java
   - Platform Version: Java 17

2. **Prepare Deployment**:
```bash
cd backend
./mvnw clean package
```

3. **Deploy JAR**:
   - Upload `target/java-career-hub-backend-1.0.0.jar`
   - Configure environment variables

### Frontend (S3 + CloudFront)
1. **Build Application**:
```bash
cd frontend
npm run build
```

2. **Create S3 Bucket**:
   - Enable static website hosting
   - Upload build folder contents

3. **Configure CloudFront**:
   - Create distribution
   - Set S3 as origin
   - Configure custom error pages for SPA

## 🐳 Docker Deployment

### Backend Dockerfile
Create `backend/Dockerfile`:
```dockerfile
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/java-career-hub-backend-1.0.0.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

### Frontend Dockerfile
Create `frontend/Dockerfile`:
```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose
Create `docker-compose.yml`:
```yaml
version: '3.8'

services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/java_career_hub
      - SPRING_DATASOURCE_USERNAME=root
      - SPRING_DATASOURCE_PASSWORD=password
    depends_on:
      - db

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:80"
    environment:
      - REACT_APP_API_URL=http://localhost:8080/api

  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=password
      - MYSQL_DATABASE=java_career_hub
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

### Run with Docker
```bash
docker-compose up --build
```

## 🔧 Production Configuration

### Backend Configuration
Create `application-prod.properties`:
```properties
# Server
server.port=${PORT:8080}

# Database
spring.datasource.url=${DATABASE_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

# JPA
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false

# Logging
logging.level.com.javacareerhub=INFO
logging.level.org.springframework=WARN

# Security
server.servlet.session.cookie.secure=true
server.servlet.session.cookie.http-only=true

# CORS
app.cors.allowed-origins=${CORS_ORIGINS:http://localhost:3000}
```

### Frontend Configuration
Create `.env.production`:
```
REACT_APP_API_URL=https://your-backend-url.com/api
GENERATE_SOURCEMAP=false
```

## 📊 Environment Variables

### Backend Required Variables
- `SPRING_PROFILES_ACTIVE=prod`
- `DATABASE_URL` (if using external database)
- `DB_USERNAME`
- `DB_PASSWORD`
- `CORS_ORIGINS`

### Frontend Required Variables
- `REACT_APP_API_URL`

## 🔍 Health Checks

### Backend Health Check
```
GET /actuator/health
```

### Frontend Health Check
Ensure the application loads and can connect to the backend API.

## 📈 Monitoring

### Application Metrics
- Access: `/actuator/metrics`
- Enable in production for monitoring

### Logging
- Configure log levels appropriately
- Use centralized logging in production

## 🔒 Security Considerations

### Backend Security
- Use HTTPS in production
- Configure proper CORS origins
- Set secure session cookies
- Use environment variables for sensitive data

### Frontend Security
- Serve over HTTPS
- Configure Content Security Policy
- Enable HSTS headers

## 🚨 Troubleshooting

### Common Deployment Issues

1. **Port Issues**:
   - Ensure `PORT` environment variable is set
   - Use `server.port=${PORT:8080}` in properties

2. **Database Connection**:
   - Verify database URL format
   - Check credentials
   - Ensure database is accessible

3. **CORS Issues**:
   - Configure allowed origins properly
   - Ensure frontend URL is in CORS configuration

4. **Build Issues**:
   - Verify Java/Node versions
   - Clear caches before building
   - Check for missing dependencies

### Rollback Strategy
1. Keep previous deployment available
2. Use blue-green deployment
3. Monitor health checks after deployment
4. Have database backup/restore plan

---

**Deployment Complete! 🎉**

Your Java Career Hub application should now be running in production. Remember to monitor the application and set up proper logging and alerting.
