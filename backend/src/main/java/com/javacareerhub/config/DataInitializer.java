package com.javacareerhub.config;

import com.javacareerhub.model.Project;
import com.javacareerhub.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public void run(String... args) throws Exception {
        if (projectRepository.count() == 0) {
            initializeProjects();
            System.out.println("✅ Sample data initialized successfully!");
        }
    }

    private void initializeProjects() {
        List<Project> projects = Arrays.asList(
            createProject("E-Commerce Platform", 
                "Full-stack e-commerce solution with Spring Boot backend and React frontend for complete online shopping experience",
                Arrays.asList("Spring Boot", "React", "MySQL", "Spring Security", "JWT", "Stripe API"),
                "Advanced", "4-6 weeks"),

            createProject("Task Management System",
                "Collaborative project management tool with real-time updates, team coordination, and progress tracking features",
                Arrays.asList("Spring Boot", "React", "WebSocket", "PostgreSQL", "Redis", "Docker"),
                "Intermediate", "3-4 weeks"),

            createProject("Student Grade Calculator",
                "Simple web application to calculate and manage student grades with basic CRUD operations and reporting",
                Arrays.asList("Java", "Spring Boot", "Thymeleaf", "H2 Database", "Bootstrap"),
                "Beginner", "1-2 weeks"),

            createProject("Personal Expense Tracker",
                "Track daily expenses, categorize spending, and generate simple reports for effective budget management",
                Arrays.asList("Java", "Spring Boot", "Spring Data JPA", "H2/MySQL", "Chart.js", "Bootstrap"),
                "Beginner", "2-3 weeks"),

            createProject("Real-time Chat Application",
                "Modern chat application with real-time messaging, user authentication, and group chat functionality",
                Arrays.asList("Spring Boot", "WebSocket", "React", "MongoDB", "JWT", "Socket.io"),
                "Advanced", "5-6 weeks"),

            createProject("Blog Platform",
                "Complete blogging platform with user authentication, post management, comments, and content moderation",
                Arrays.asList("Spring Boot", "React", "MySQL", "Spring Security", "Rich Text Editor"),
                "Intermediate", "3-4 weeks"),

            createProject("Inventory Management System",
                "Business inventory management with product tracking, stock alerts, supplier management, and reporting",
                Arrays.asList("Spring Boot", "Angular", "PostgreSQL", "JasperReports", "Spring Security"),
                "Intermediate", "4-5 weeks")
        );

        projectRepository.saveAll(projects);
    }

    private Project createProject(String title, String description, List<String> technologies, String difficulty, String duration) {
        Project project = new Project();
        project.setTitle(title);
        project.setDescription(description);
        project.setTechnologies(technologies);
        project.setDifficulty(difficulty);
        project.setDuration(duration);

        // Add sample learning objectives
        project.setLearningObjectives(Arrays.asList(
            "Master " + difficulty.toLowerCase() + " level Java development concepts",
            "Practice with modern frameworks: " + String.join(", ", technologies.subList(0, Math.min(3, technologies.size()))),
            "Build production-ready applications with proper architecture",
            "Implement best practices for security and performance",
            "Gain hands-on experience with full-stack development"
        ));

        // Add sample implementation steps
        project.setSteps(Arrays.asList(
            "Set up development environment and project structure",
            "Design database schema and create entity models",
            "Implement backend REST APIs with Spring Boot",
            "Create responsive frontend user interface",
            "Integrate frontend with backend APIs",
            "Add authentication and security features",
            "Implement core business logic and features",
            "Add comprehensive testing (unit and integration)",
            "Deploy application to cloud platform",
            "Document API and create user guide"
        ));

        // Add sample key features
        project.setKeyFeatures(Arrays.asList(
            "Modern responsive user interface",
            "RESTful API architecture",
            "Secure user authentication",
            "Real-time data processing",
            "Comprehensive error handling",
            "Production-ready deployment",
            "Extensive documentation",
            "Performance optimization"
        ));

        return project;
    }
}