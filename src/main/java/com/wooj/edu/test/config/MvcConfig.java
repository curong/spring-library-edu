package com.wooj.edu.test.config;

import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class MvcConfig implements WebMvcConfigurer {

    private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
         "classpath:/static/"
        ,"classpath:/templates/"
        ,"classpath:/"
        ,"classpath:/resources/"
        ,"classpath:/img/"
        ,"classpath:/video/"
//        ,"classpath:/META-INF/resources/"
//        ,"classpath:/META-INF/resources/webjars/"
    };

    public void addViewControllers(ViewControllerRegistry registry) {
        // 경로에 해당하는 url을 forword 합니다.
        registry.addViewController("/").setViewName("forword:/index");

        // 우선순위를 가장 높게 잡는다.
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 자원의 경로를 허용합니다.
        registry.addResourceHandler("/**").addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
    }

}
