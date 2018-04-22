package com.igi.BookManager.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
public class BookController {
    @GetMapping("/hello")
    public String sayHello(){
        return "Hello";
    }
}
