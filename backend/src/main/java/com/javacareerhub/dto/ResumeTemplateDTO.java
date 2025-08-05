package com.javacareerhub.dto;

import java.util.List;

public class ResumeTemplateDTO {

    private Long id;
    private String title;
    private String type;
    private String description; 
    private String difficulty;
    private String experience;
    private List<String> features;

    // Constructors
    public ResumeTemplateDTO() {}

    public ResumeTemplateDTO(String title, String type, String description) {
        this.title = title;
        this.type = type;
        this.description = description;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public String getExperience() { return experience; }
    public void setExperience(String experience) { this.experience = experience; }

    public List<String> getFeatures() { return features; }
    public void setFeatures(List<String> features) { this.features = features; }
}