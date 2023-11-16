package com.team.artisys.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor

public class RegisterController {

    @PostMapping(value = "register")
    public String Register(){
        return "welcome to register";
    }
}
