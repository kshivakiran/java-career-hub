package com.javacareerhub.controller;

import com.javacareerhub.dto.ResumeTemplateDTO;
import com.javacareerhub.service.ResumeService;
import com.javacareerhub.util.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "http://localhost:3000")
@Tag(name = "Resume Builder", description = "Resume template and builder APIs")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @GetMapping("/templates")
    @Operation(summary = "Get all resume templates", description = "Retrieve all available resume templates")
    public ResponseEntity<ApiResponse<List<ResumeTemplateDTO>>> getAllTemplates() {
        List<ResumeTemplateDTO> templates = resumeService.getAllTemplates();
        return ResponseEntity.ok(new ApiResponse<>(true, "Resume templates retrieved successfully", templates));
    }

    @GetMapping("/templates/{id}")
    @Operation(summary = "Get template by ID", description = "Retrieve a specific resume template")
    public ResponseEntity<ApiResponse<ResumeTemplateDTO>> getTemplateById(@PathVariable Long id) {
        ResumeTemplateDTO template = resumeService.getTemplateById(id);
        return ResponseEntity.ok(new ApiResponse<>(true, "Resume template retrieved successfully", template));
    }
}