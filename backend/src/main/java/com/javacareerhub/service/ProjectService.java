package com.javacareerhub.service;

import com.javacareerhub.dto.ProjectDTO;
import com.javacareerhub.exception.ResourceNotFoundException;
import com.javacareerhub.model.Project;
import com.javacareerhub.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<ProjectDTO> getAllProjects() {
        return projectRepository.findByOrderByCreatedAtDesc()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public ProjectDTO getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + id));
        return convertToDTO(project);
    }

    public List<ProjectDTO> getProjectsByDifficulty(String difficulty) {
        return projectRepository.findByDifficultyIgnoreCase(difficulty)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ProjectDTO> searchProjects(String keyword) {
        return projectRepository.findByKeyword(keyword)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private ProjectDTO convertToDTO(Project project) {
        ProjectDTO dto = new ProjectDTO();
        dto.setId(project.getId());
        dto.setTitle(project.getTitle());
        dto.setDescription(project.getDescription());
        dto.setTechnologies(project.getTechnologies());
        dto.setDifficulty(project.getDifficulty());
        dto.setDuration(project.getDuration());
        dto.setLearningObjectives(project.getLearningObjectives());
        dto.setSteps(project.getSteps());
        dto.setKeyFeatures(project.getKeyFeatures());
        dto.setCreatedAt(project.getCreatedAt());
        dto.setUpdatedAt(project.getUpdatedAt());
        return dto;
    }
}