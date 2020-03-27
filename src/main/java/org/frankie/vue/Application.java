package org.frankie.vue;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileTime;
import java.time.Instant;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(@SuppressWarnings("unused") ApplicationContext ctx) {

        // reload trigger is updated on spring-changes, only serves the purpose of
        // letting browser-sync know something changed and auto-refresh browsers
        try {
            Path path = Paths.get("reload-trigger");
            if (Files.exists(path)) {
                Files.setLastModifiedTime(path, FileTime.from(Instant.now()));
            } else {
                Files.createFile(path);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return args -> System.out.println("Hello all from Spring boot!");
    }
}