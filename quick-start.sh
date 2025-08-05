#!/bin/bash
# Java Career Hub - Quick Start Script

echo "🚀 Java Career Hub Quick Start"
echo "================================"

# Check Java version
echo "📋 Checking Java version..."
java -version
if [ $? -ne 0 ]; then
    echo "❌ Java not found. Please install Java 17 or higher."
    exit 1
fi

# Check Node.js version
echo "📋 Checking Node.js version..."
node -v
if [ $? -ne 0 ]; then
    echo "❌ Node.js not found. Please install Node.js 18 or higher."
    exit 1
fi

echo "✅ Prerequisites satisfied!"
echo ""

echo "🔧 Starting Backend..."
cd backend
chmod +x mvnw
./mvnw spring-boot:run &
BACKEND_PID=$!

echo "⏳ Waiting for backend to start..."
sleep 30

echo "🔧 Starting Frontend..."
cd ../frontend
npm install
npm start &
FRONTEND_PID=$!

echo ""
echo "🎉 Java Career Hub is starting!"
echo "📋 Backend: http://localhost:8080"
echo "🌐 Frontend: http://localhost:3000"
echo "📖 API Docs: http://localhost:8080/swagger-ui.html"
echo "🗄️ H2 Console: http://localhost:8080/h2-console"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user interrupt
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
