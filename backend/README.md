# Java Career Hub - Backend API

Spring Boot REST API for the Java Career Hub platform.

## 🚀 Quick Start

### Run with Maven
```bash
./mvnw spring-boot:run
```

### Run with IDE
1. Open project in IntelliJ IDEA or Eclipse
2. Run `JavaCareerHubApplication.java`

### Build JAR
```bash
./mvnw clean package
java -jar target/java-career-hub-backend-1.0.0.jar
```

## 📋 API Documentation

Once running, visit:
- **Swagger UI**: http://localhost:8080/swagger-ui.html
- **API Docs**: http://localhost:8080/api-docs

## 🗄️ Database

### H2 Console (Development)
- URL: http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:mem:javacareerhub`
- Username: `sa`
- Password: (empty)

### MySQL Setup (Production)
```sql
CREATE DATABASE java_career_hub;
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON java_career_hub.* TO 'app_user'@'localhost';
```

## 🔧 Configuration

### Development Profile
```bash
./mvnw spring-boot:run -Dspring.profiles.active=dev
```

### Production Profile
```bash
java -jar app.jar --spring.profiles.active=prod
```

## 📊 Health Check

GET http://localhost:8080/actuator/health

## 🧪 Testing

```bash
./mvnw test
```

## 📦 Key Dependencies

- Spring Boot 3.2.0
- Spring Data JPA
- H2 Database
- MySQL Connector
- SpringDoc OpenAPI
- Spring Boot DevTools
