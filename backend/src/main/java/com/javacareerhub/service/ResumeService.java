package com.javacareerhub.service;

import com.javacareerhub.dto.ResumeTemplateDTO;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ResumeService {

    private final List<ResumeTemplateDTO> templates = Arrays.asList(
        createTemplate(1L, "Senior Java Full-Stack Developer Resume", "senior", 
                      "Professional template for experienced Java developers with 5+ years of experience",
                      "Senior Level", "5+ Years",
                      Arrays.asList("Technical Skills Matrix", "Project Highlights", "Leadership Experience", "Certifications")),
        createTemplate(2L, "Mid-Level Java Full-Stack Developer Resume", "mid_level",
                      "Template for Java developers with 2-5 years of experience focusing on growth and learning", 
                      "Mid Level", "2-5 Years",
                      Arrays.asList("Skills Development", "Project Portfolio", "Learning Journey", "Career Growth")),
        createTemplate(3L, "Entry Level Java Developer Resume", "entry_level",
                      "Perfect template for fresh graduates and junior developers starting their Java career",
                      "Entry Level", "0-2 Years", 
                      Arrays.asList("Academic Projects", "Internship Experience", "Core Skills", "Learning Mindset"))
    );

    public List<ResumeTemplateDTO> getAllTemplates() {
        return new ArrayList<>(templates);
    }

    public ResumeTemplateDTO getTemplateById(Long id) {
        return templates.stream()
            .filter(template -> template.getId().equals(id))
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Template not found with id: " + id));
    }

    private ResumeTemplateDTO createTemplate(Long id, String title, String type, String description,
                                           String difficulty, String experience, List<String> features) {
        ResumeTemplateDTO template = new ResumeTemplateDTO(title, type, description);
        template.setId(id);
        template.setDifficulty(difficulty);
        template.setExperience(experience);
        template.setFeatures(features);
        return template;
    }
}