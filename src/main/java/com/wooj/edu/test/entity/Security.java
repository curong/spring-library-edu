package com.wooj.edu.test.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "security")

public class Security {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pid;
    private String userId;
    private String pw;
    private String firstName;
    private String lastName;
    private LocalDateTime birthday;
    private String address;
    private String email;

}
