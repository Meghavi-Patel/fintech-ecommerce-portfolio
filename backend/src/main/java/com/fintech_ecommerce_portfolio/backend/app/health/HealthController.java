package com.fintech_ecommerce_portfolio.backend.app.health;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    @GetMapping("/api/health")
    public Map<String,String> healthCheck() {
        return Map.of("status", "UP");
    }
    
}
