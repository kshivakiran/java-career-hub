package com.javacareerhub.controller;

import com.javacareerhub.dto.SalaryCalculationDTO;
import com.javacareerhub.service.SalaryService;
import com.javacareerhub.util.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/salary")
@CrossOrigin(origins = "http://localhost:3000")
@Tag(name = "Salary Calculator", description = "Salary calculation and trends APIs")
public class SalaryController {

    @Autowired
    private SalaryService salaryService;

    @GetMapping("/calculate")
    @Operation(summary = "Calculate salary", description = "Calculate salary based on experience, location, and skills")
    public ResponseEntity<ApiResponse<SalaryCalculationDTO>> calculateSalary(
            @RequestParam String experience,
            @RequestParam String location,
            @RequestParam String skills,
            @RequestParam(required = false) String education) {

        SalaryCalculationDTO result = salaryService.calculateSalary(experience, location, skills, education);
        return ResponseEntity.ok(new ApiResponse<>(true, "Salary calculated successfully", result));
    }

    @GetMapping("/trends")
    @Operation(summary = "Get salary trends", description = "Get salary trends by location and experience")
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getSalaryTrends() {
        List<Map<String, Object>> trends = salaryService.getSalaryTrends();
        return ResponseEntity.ok(new ApiResponse<>(true, "Salary trends retrieved successfully", trends));
    }
}