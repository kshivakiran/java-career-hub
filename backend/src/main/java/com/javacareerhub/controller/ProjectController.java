package com.javacareerhub.controller;

import com.javacareerhub.dto.ProjectDTO;
import com.javacareerhub.service.ProjectService;
import com.javacareerhub.util.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:3000")
@Tag(name = "Projects", description = "Project management APIs")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping
    @Operation(summary = "Get all projects", description = "Retrieve all available projects")
    public ResponseEntity<ApiResponse<List<ProjectDTO>>> getAllProjects() {
        List<ProjectDTO> projects = projectService.getAllProjects();
        return ResponseEntity.ok(new ApiResponse<>(true, "Projects retrieved successfully", projects));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get project by ID", description = "Retrieve a specific project by its ID")
    public ResponseEntity<ApiResponse<ProjectDTO>> getProjectById(@PathVariable Long id) {
        ProjectDTO project = projectService.getProjectById(id);
        return ResponseEntity.ok(new ApiResponse<>(true, "Project retrieved successfully", project));
    }

    @GetMapping("/difficulty/{difficulty}")
    @Operation(summary = "Get projects by difficulty", description = "Filter projects by difficulty level")
    public ResponseEntity<ApiResponse<List<ProjectDTO>>> getProjectsByDifficulty(@PathVariable String difficulty) {
        List<ProjectDTO> projects = projectService.getProjectsByDifficulty(difficulty);
        return ResponseEntity.ok(new ApiResponse<>(true, "Projects filtered successfully", projects));
    }

    @GetMapping("/search")
    @Operation(summary = "Search projects", description = "Search projects by keyword")
    public ResponseEntity<ApiResponse<List<ProjectDTO>>> searchProjects(@RequestParam String keyword) {
        List<ProjectDTO> projects = projectService.searchProjects(keyword);
        return ResponseEntity.ok(new ApiResponse<>(true, "Search completed successfully", projects));
    }
}