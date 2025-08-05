package com.javacareerhub.service;

import com.javacareerhub.dto.SalaryCalculationDTO;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SalaryService {

    private final List<Map<String, Object>> salaryData = Arrays.asList(
        createSalaryEntry("0-1", "Bangalore", "Core Java", 300000L, 500000L, 400000L),
        createSalaryEntry("0-1", "Mumbai", "Core Java", 350000L, 550000L, 450000L),
        createSalaryEntry("0-1", "Delhi", "Core Java", 320000L, 520000L, 420000L),
        createSalaryEntry("1-3", "Bangalore", "Spring Boot", 500000L, 800000L, 650000L),
        createSalaryEntry("1-3", "Mumbai", "Spring Boot", 550000L, 850000L, 700000L),
        createSalaryEntry("3-5", "Bangalore", "Full Stack", 800000L, 1200000L, 1000000L),
        createSalaryEntry("5-8", "Bangalore", "Microservices", 1200000L, 1800000L, 1500000L),
        createSalaryEntry("8+", "Bangalore", "Architect", 1800000L, 3000000L, 2400000L)
    );

    public SalaryCalculationDTO calculateSalary(String experience, String location, String skills, String education) {
        Optional<Map<String, Object>> matchingData = salaryData.stream()
            .filter(data -> data.get("experience").equals(experience) && data.get("location").equals(location))
            .findFirst();

        if (!matchingData.isPresent()) {
            // Fallback to experience-based calculation
            matchingData = salaryData.stream()
                .filter(data -> data.get("experience").equals(experience))
                .findFirst();
        }

        if (!matchingData.isPresent()) {
            throw new RuntimeException("No salary data found for the given criteria");
        }

        Map<String, Object> baseData = matchingData.get();
        double multiplier = calculateMultiplier(skills, education);

        Long baseMin = (Long) baseData.get("min_salary");
        Long baseMax = (Long) baseData.get("max_salary");
        Long baseAvg = (Long) baseData.get("avg_salary");

        SalaryCalculationDTO result = new SalaryCalculationDTO();
        result.setMinSalary(Math.round(baseMin * multiplier));
        result.setMaxSalary(Math.round(baseMax * multiplier));
        result.setAvgSalary(Math.round(baseAvg * multiplier));
        result.setExperience(experience);
        result.setLocation(location);
        result.setSkills(skills);
        result.setEducation(education);
        result.setMultiplier(multiplier);

        return result;
    }

    public List<Map<String, Object>> getSalaryTrends() {
        return new ArrayList<>(salaryData);
    }

    private Map<String, Object> createSalaryEntry(String experience, String location, String skills, 
                                                  Long minSalary, Long maxSalary, Long avgSalary) {
        Map<String, Object> entry = new HashMap<>();
        entry.put("experience", experience);
        entry.put("location", location);
        entry.put("skills", skills);
        entry.put("min_salary", minSalary);
        entry.put("max_salary", maxSalary);
        entry.put("avg_salary", avgSalary);
        return entry;
    }

    private double calculateMultiplier(String skills, String education) {
        double multiplier = 1.0;

        switch (skills != null ? skills : "") {
            case "Spring Boot": multiplier = 1.1; break;
            case "Full Stack": multiplier = 1.2; break;
            case "Microservices": multiplier = 1.3; break;
            case "Architect": multiplier = 1.4; break;
            default: multiplier = 1.0;
        }

        if ("Masters".equals(education)) multiplier += 0.1;
        if ("PhD".equals(education)) multiplier += 0.2;

        return multiplier;
    }
}