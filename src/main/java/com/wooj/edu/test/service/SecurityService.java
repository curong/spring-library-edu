package com.wooj.edu.test.service;

import com.wooj.edu.test.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {

    @Autowired
    SecurityRepository userRepository;

}
