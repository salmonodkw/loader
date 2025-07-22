package com.loader;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class main {

    public static void main(String[] args) {
        SpringApplication.run(main.class, args);
    }
}

@RestController
class ApiController {

    @GetMapping("/")
    public String home() {
        return "Welcome to loader API";
    }

    @GetMapping("/health")
    public HealthResponse health() {
        return new HealthResponse("OK", System.currentTimeMillis());
    }
}

class HealthResponse {
    private String status;
    private long timestamp;

    public HealthResponse(String status, long timestamp) {
        this.status = status;
        this.timestamp = timestamp;
    }

    // getters and setters
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public long getTimestamp() { return timestamp; }
    public void setTimestamp(long timestamp) { this.timestamp = timestamp; }
}

# Additional Implementation 1760549864

# Additional Implementation 1760549864

# Code Update 1760549864-814

# Additional Implementation 1760549864

# Code Update 1760549864-26697

# Code Update 1760549864-21877

# Code Update 1760549864-22517

# Code Update 1760549865-2655

# Additional Implementation 1760549865

# Code Update 1760549865-7448

# Additional Implementation 1760549865

# Additional Implementation 1760549865
