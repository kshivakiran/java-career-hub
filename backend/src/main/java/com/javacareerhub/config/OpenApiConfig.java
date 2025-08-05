package com.javacareerhub.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Java Career Hub API")
                        .version("1.0.0")
                        .description("Complete API documentation for Java Career Hub platform")
                        .contact(new Contact()
                                .name("Java Career Hub Team")
                                .email("support@javacareerhub.com")
                                .url("https://javacareerhub.com")));
    }
}