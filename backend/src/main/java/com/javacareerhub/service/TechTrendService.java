package com.javacareerhub.service;

import com.javacareerhub.dto.TechTrendDTO;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TechTrendService {

    private final List<TechTrendDTO> techTrends = initializeTechTrends();

    private List<TechTrendDTO> initializeTechTrends() {
        List<TechTrendDTO> trends = new ArrayList<>();

        TechTrendDTO springBoot = new TechTrendDTO("Spring Boot", 95, 15.2, "Backend Framework");
        springBoot.setJobDemand(89);
        springBoot.setSalaryImpact(25);
        springBoot.setDescription("Leading Java framework for microservices");
        trends.add(springBoot);

        TechTrendDTO react = new TechTrendDTO("React", 92, 12.8, "Frontend Framework");
        react.setJobDemand(87);
        react.setSalaryImpact(20);
        react.setDescription("Most popular frontend library");
        trends.add(react);

        TechTrendDTO microservices = new TechTrendDTO("Microservices", 88, 18.5, "Architecture");
        microservices.setJobDemand(85);
        microservices.setSalaryImpact(30);
        microservices.setDescription("Dominant architectural pattern");
        trends.add(microservices);

        TechTrendDTO docker = new TechTrendDTO("Docker", 85, 20.3, "DevOps");
        docker.setJobDemand(82);
        docker.setSalaryImpact(22);
        docker.setDescription("Containerization platform");
        trends.add(docker);

        TechTrendDTO kubernetes = new TechTrendDTO("Kubernetes", 78, 25.7, "DevOps");
        kubernetes.setJobDemand(79);
        kubernetes.setSalaryImpact(28);
        kubernetes.setDescription("Container orchestration leader");
        trends.add(kubernetes);

        return trends;
    }

    public List<TechTrendDTO> getAllTrends() {
        return new ArrayList<>(techTrends);
    }

    public List<TechTrendDTO> getTrendsByCategory(String category) {
        if ("All".equals(category)) {
            return getAllTrends();
        }
        return techTrends.stream()
            .filter(trend -> category.equals(trend.getCategory()))
            .collect(Collectors.toList());
    }
}