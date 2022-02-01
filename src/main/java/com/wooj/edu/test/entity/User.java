package com.wooj.edu.test.entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pid;

    private String pw;

    private String firstName;

    private String lastName;

    private LocalDateTime birthday;

    private String address;

    private String email;

    public User() {
    }
}
