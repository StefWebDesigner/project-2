package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.AccountTypes;
import com.Revature.Revademy.entities.AgeType;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    //REGISTER A NEW USER
    @RequestMapping(method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user));
    }

    //LOGIN AN EXISITING USER
    @RequestMapping(value="/login", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> loginUser(@RequestParam String username, @RequestParam String password ) {
        User user = userService.loginUser(username, password);
        if(user == null) {
            return ResponseEntity.ok("Information was incorrect");
        }
        return ResponseEntity.ok(user);
    }


    @RequestMapping(value="/delete", method=RequestMethod.DELETE)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> deleteUser(@RequestParam Integer id, @RequestParam AccountTypes accountTypes) {
        return ResponseEntity.ok(userService.deleteUser(id, accountTypes));

    }



}
