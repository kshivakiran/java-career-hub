package com.javacareerhub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class JavaCareerHubApplication {

    public static void main(String[] args) {
        SpringApplication.run(JavaCareerHubApplication.class, args);
        System.out.println("🚀 Java Career Hub Backend Started Successfully!");
        System.out.println("📋 API Documentation: http://localhost:8080/swagger-ui.html");
        System.out.println("🔗 H2 Console: http://localhost:8080/h2-console");
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}