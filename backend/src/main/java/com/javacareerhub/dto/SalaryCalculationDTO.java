package com.javacareerhub.dto;

import java.util.List;
import java.util.Map;

public class SalaryCalculationDTO {

    private Long minSalary;
    private Long maxSalary;
    private Long avgSalary;
    private String experience;
    private String location;
    private String skills;
    private String education;
    private Double multiplier;
    private List<Map<String, Object>> marketData;

    // Constructors
    public SalaryCalculationDTO() {}

    // Getters and Setters
    public Long getMinSalary() { return minSalary; }
    public void setMinSalary(Long minSalary) { this.minSalary = minSalary; }

    public Long getMaxSalary() { return maxSalary; }
    public void setMaxSalary(Long maxSalary) { this.maxSalary = maxSalary; }

    public Long getAvgSalary() { return avgSalary; }
    public void setAvgSalary(Long avgSalary) { this.avgSalary = avgSalary; }

    public String getExperience() { return experience; }
    public void setExperience(String experience) { this.experience = experience; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getSkills() { return skills; }
    public void setSkills(String skills) { this.skills = skills; }

    public String getEducation() { return education; }
    public void setEducation(String education) { this.education = education; }

    public Double getMultiplier() { return multiplier; }
    public void setMultiplier(Double multiplier) { this.multiplier = multiplier; }

    public List<Map<String, Object>> getMarketData() { return marketData; }
    public void setMarketData(List<Map<String, Object>> marketData) { this.marketData = marketData; }
}