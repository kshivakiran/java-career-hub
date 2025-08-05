@echo off
REM Java Career Hub - Quick Start Script for Windows

echo 🚀 Java Career Hub Quick Start
echo ================================

REM Check Java version
echo 📋 Checking Java version...
java -version
if %errorlevel% neq 0 (
    echo ❌ Java not found. Please install Java 17 or higher.
    pause
    exit /b 1
)

REM Check Node.js version
echo 📋 Checking Node.js version...
node -v
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js 18 or higher.
    pause
    exit /b 1
)

echo ✅ Prerequisites satisfied!
echo.

echo 🔧 Starting Backend...
cd backend
start "Backend" mvnw.cmd spring-boot:run

echo ⏳ Waiting for backend to start...
timeout /t 30 /nobreak

echo 🔧 Starting Frontend...
cd ..rontend
call npm install
start "Frontend" npm start

echo.
echo 🎉 Java Career Hub is starting!
echo 📋 Backend: http://localhost:8080
echo 🌐 Frontend: http://localhost:3000
echo 📖 API Docs: http://localhost:8080/swagger-ui.html
echo 🗄️ H2 Console: http://localhost:8080/h2-console
echo.
echo Press any key to continue...
pause
