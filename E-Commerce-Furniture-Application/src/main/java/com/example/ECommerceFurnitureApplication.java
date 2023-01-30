package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@SpringBootApplication
@EnableEurekaClient
public class ECommerceFurnitureApplication {

	public static void main(String[] args) {
		SpringApplication.run(ECommerceFurnitureApplication.class, args);
	}

}
