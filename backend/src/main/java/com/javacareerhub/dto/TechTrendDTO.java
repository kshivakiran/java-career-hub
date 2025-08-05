package com.javacareerhub.dto;

public class TechTrendDTO {

    private Long id;
    private String technology;
    private Integer popularity;
    private Double growth;
    private Integer jobDemand;
    private Integer salaryImpact;
    private String category;
    private String description;

    // Constructors
    public TechTrendDTO() {}

    public TechTrendDTO(String technology, Integer popularity, Double growth, String category) {
        this.technology = technology;
        this.popularity = popularity;
        this.growth = growth;
        this.category = category;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTechnology() { return technology; }
    public void setTechnology(String technology) { this.technology = technology; }

    public Integer getPopularity() { return popularity; }
    public void setPopularity(Integer popularity) { this.popularity = popularity; }

    public Double getGrowth() { return growth; }
    public void setGrowth(Double growth) { this.growth = growth; }

    public Integer getJobDemand() { return jobDemand; }
    public void setJobDemand(Integer jobDemand) { this.jobDemand = jobDemand; }

    public Integer getSalaryImpact() { return salaryImpact; }
    public void setSalaryImpact(Integer salaryImpact) { this.salaryImpact = salaryImpact; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}