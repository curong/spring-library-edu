package com.wooj.edu.test.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/security")
public class SecurityController {

    @GetMapping("/test")
    public ModelAndView auth() {
        return new ModelAndView("/security/test");
    }
}
