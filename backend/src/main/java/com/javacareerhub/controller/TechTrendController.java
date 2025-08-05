package com.javacareerhub.controller;

import com.javacareerhub.dto.TechTrendDTO;
import com.javacareerhub.service.TechTrendService;
import com.javacareerhub.util.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trends")
@CrossOrigin(origins = "http://localhost:3000")
@Tag(name = "Technology Trends", description = "Technology trends and insights APIs")
public class TechTrendController {

    @Autowired
    private TechTrendService techTrendService;

    @GetMapping
    @Operation(summary = "Get all tech trends", description = "Retrieve all technology trends")
    public ResponseEntity<ApiResponse<List<TechTrendDTO>>> getAllTrends() {
        List<TechTrendDTO> trends = techTrendService.getAllTrends();
        return ResponseEntity.ok(new ApiResponse<>(true, "Technology trends retrieved successfully", trends));
    }

    @GetMapping("/category/{category}")
    @Operation(summary = "Get trends by category", description = "Filter technology trends by category")
    public ResponseEntity<ApiResponse<List<TechTrendDTO>>> getTrendsByCategory(@PathVariable String category) {
        List<TechTrendDTO> trends = techTrendService.getTrendsByCategory(category);
        return ResponseEntity.ok(new ApiResponse<>(true, "Trends filtered by category successfully", trends));
    }
}