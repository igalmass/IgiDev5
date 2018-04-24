package com.example.demo.controllers;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository){

        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id){
        return this.userRepository.findById(id).get();
    }

    @DeleteMapping("/user/{id}")
    public boolean deleteUser(@PathVariable Long id){
        this.userRepository.deleteById(id);
        return true;
    }

    @PutMapping("/user")
    public User updateUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }
}
