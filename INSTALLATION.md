# Installation Guide - Java Career Hub

Complete step-by-step installation guide for Java Career Hub full-stack application.

## 📋 Prerequisites

### Required Software
1. **Java Development Kit (JDK) 17 or higher**
   - Download: https://adoptium.net/
   - Verify: `java -version`

2. **Node.js 18 or higher**
   - Download: https://nodejs.org/
   - Verify: `node -v` and `npm -v`

3. **Git**
   - Download: https://git-scm.com/
   - Verify: `git --version`

### Optional (Recommended)
- **MySQL 8.0** (for production)
- **Postman** (for API testing)
- **VS Code** or **IntelliJ IDEA**

## 🚀 Installation Steps

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd java-career-hub-fullstack
```

### Step 2: Backend Setup

#### 2.1 Navigate to Backend Directory
```bash
cd backend
```

#### 2.2 Make Maven Wrapper Executable (Linux/Mac)
```bash
chmod +x mvnw
```

#### 2.3 Install Dependencies and Run
```bash
# Windows
mvnw.cmd spring-boot:run

# Linux/Mac
./mvnw spring-boot:run
```

#### 2.4 Verify Backend
- API should be running on: http://localhost:8080
- Check Swagger UI: http://localhost:8080/swagger-ui.html
- Check H2 Console: http://localhost:8080/h2-console

### Step 3: Frontend Setup

#### 3.1 Open New Terminal and Navigate to Frontend
```bash
cd frontend
```

#### 3.2 Install Dependencies
```bash
npm install
```

#### 3.3 Start Development Server
```bash
npm start
```

#### 3.4 Verify Frontend
- Application should open in browser: http://localhost:3000
- Check that API calls are working (projects should load)

## 🔧 IDE Setup

### VS Code Setup

1. **Install Extensions**:
   - Java Extension Pack
   - Spring Boot Extension Pack
   - ES7+ React/Redux/React-Native snippets
   - REST Client (for API testing)

2. **Open Project**:
   - Open the root folder `java-career-hub-fullstack`
   - VS Code will detect both Java and Node.js projects

3. **Running from VS Code**:
   - Backend: Open `JavaCareerHubApplication.java` and click "Run"
   - Frontend: Open terminal and run `npm start`

### Eclipse Setup

1. **Backend**:
   - File → Import → Existing Maven Projects
   - Select the `backend` folder
   - Eclipse will import the Spring Boot project

2. **Frontend**:
   - File → Import → General → Existing Projects into Workspace
   - Select the `frontend` folder

### IntelliJ IDEA Setup

1. **Open Project**:
   - Open the root folder `java-career-hub-fullstack`
   - IntelliJ will detect the Maven project (backend)
   - For frontend, mark `frontend` folder as excluded from indexing if needed

2. **Running**:
   - Backend: Right-click `JavaCareerHubApplication.java` → Run
   - Frontend: Open terminal and run `npm start`

## 🗄️ Database Configuration

### Development (H2 - Default)
No configuration needed. H2 runs in-memory.

**H2 Console Access**:
- URL: http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:mem:javacareerhub`
- Username: `sa`
- Password: (leave empty)

### Production (MySQL)

1. **Install MySQL 8.0**
2. **Create Database**:
```sql
CREATE DATABASE java_career_hub;
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON java_career_hub.* TO 'app_user'@'localhost';
FLUSH PRIVILEGES;
```

3. **Update Configuration**:
Edit `backend/src/main/resources/application-prod.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/java_career_hub
spring.datasource.username=app_user
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

4. **Run with Production Profile**:
```bash
./mvnw spring-boot:run -Dspring.profiles.active=prod
```

## ✅ Verification Checklist

### Backend Verification
- [ ] Backend starts without errors
- [ ] http://localhost:8080/actuator/health returns `{"status":"UP"}`
- [ ] http://localhost:8080/swagger-ui.html loads
- [ ] http://localhost:8080/api/projects returns project data
- [ ] H2 console accessible (development)

### Frontend Verification
- [ ] Frontend starts without errors
- [ ] http://localhost:3000 loads the application
- [ ] Navigation works (Dashboard, Projects, etc.)
- [ ] Projects page loads and displays data
- [ ] No console errors in browser developer tools

## 🐛 Troubleshooting

### Common Issues

#### 1. Java Version Issues
```bash
# Check Java version
java -version

# Should show Java 17 or higher
# If not, download and install correct version
```

#### 2. Port Already in Use
```bash
# Backend (port 8080)
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:8080 | xargs kill -9

# Frontend (port 3000)
# Usually handled automatically by Create React App
```

#### 3. Node.js/npm Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 4. Maven Issues
```bash
# Clean and reinstall dependencies
./mvnw clean install

# Skip tests if needed
./mvnw clean install -DskipTests
```

#### 5. CORS Issues
- Ensure backend is running before frontend
- Check CORS configuration in `JavaCareerHubApplication.java`
- Verify proxy configuration in `package.json`

### Getting Help

1. **Check Logs**:
   - Backend: Console output from Maven
   - Frontend: Browser developer console

2. **API Testing**:
   - Use Postman or curl to test API endpoints
   - Check Swagger UI for endpoint documentation

3. **Database Issues**:
   - Access H2 console to verify data
   - Check database connection settings

## 📦 Building for Production

### Backend
```bash
cd backend
./mvnw clean package
```
JAR file created: `target/java-career-hub-backend-1.0.0.jar`

### Frontend
```bash
cd frontend
npm run build
```
Static files created in: `build/` folder

### Running Production Build
```bash
# Backend
java -jar backend/target/java-career-hub-backend-1.0.0.jar

# Frontend
# Serve the build folder with any web server
# Example with Node.js serve:
npx serve -s frontend/build
```

---

**Installation Complete! 🎉**

Your Java Career Hub application should now be running successfully. Visit http://localhost:3000 to start exploring!
