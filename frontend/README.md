# Java Career Hub - Frontend

React frontend for the Java Career Hub platform.

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm start
```
Runs on: http://localhost:3000

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm test
```

## 🛠️ Development

### Project Structure
```
src/
├── components/         # React components
│   ├── common/        # Reusable components
│   ├── projects/      # Project-related components
│   ├── salary/        # Salary calculator
│   ├── trends/        # Technology trends
│   └── resume/        # Resume builder
├── services/          # API service calls
├── styles/            # CSS styles
└── utils/             # Utility functions
```

### Adding New Components
1. Create component in appropriate folder
2. Export from component file
3. Import and use in parent component

### API Integration
```javascript
import projectService from '../services/projectService';

const loadProjects = async () => {
  try {
    const response = await projectService.getAllProjects();
    setProjects(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎨 Styling

- **Framework**: Bootstrap 5
- **Icons**: Font Awesome 6
- **Custom**: CSS modules for component-specific styles

## 📦 Key Dependencies

- React 18.2.0
- React Router Dom 6.18.0
- Bootstrap 5.3.0
- Axios 1.6.0
- Chart.js 4.4.0
