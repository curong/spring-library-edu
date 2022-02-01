package com.wooj.edu.test.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/validation")
public class ValidationController {

    @GetMapping("/test")
    public ModelAndView test() {
        return new ModelAndView("/validation/test");
    }
}
