package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.Users;
import com.Revature.Revademy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @RequestMapping (method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Users> registerUser(@RequestBody Users users) {
        return ResponseEntity.ok(userService.registerUser(users));
    }






}
