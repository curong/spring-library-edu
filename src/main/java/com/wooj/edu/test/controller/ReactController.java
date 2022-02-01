package com.wooj.edu.test.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/react")

public class ReactController {

    @GetMapping("/test")
    public String test() {
        return "리액트 연결 시도하기";
    }
}
