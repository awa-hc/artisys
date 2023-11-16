package com.team.artisys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.team.artisys.model")
public class ArtisysApplication {
    public static void main(String[] args) {
        SpringApplication.run(ArtisysApplication.class, args);
    }
}