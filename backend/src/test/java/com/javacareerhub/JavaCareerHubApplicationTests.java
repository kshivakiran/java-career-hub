package com.javacareerhub;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class JavaCareerHubApplicationTests {

    @Test
    void contextLoads() {
        // Test that the Spring context loads successfully
    }

    @Test
    void mainMethodTest() {
        // Test main method doesn't throw exceptions
        JavaCareerHubApplication.main(new String[] {});
    }
}