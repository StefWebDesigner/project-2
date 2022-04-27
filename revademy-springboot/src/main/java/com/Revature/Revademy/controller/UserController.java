package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.AccountTypes;
import com.Revature.Revademy.entities.AgeType;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
//    http://localhost:8080/user
    @RequestMapping(method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user));
    }

//  LOGIN AN EXISITING USER
//    http://localhost:8080/user/login?username=Stef&password=admin
    @RequestMapping(value="/login", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> loginUser(@RequestParam String username, @RequestParam String password ) {
        User user = userService.loginUser(username, password);
        return ResponseEntity.ok(user);
    }

    //DELETE USER
//    http://localhost:8080/user/delete?id=3
    @RequestMapping(value="/delete", method=RequestMethod.DELETE)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> deleteUser(@RequestParam Integer id) {
        return ResponseEntity.ok(userService.deleteUser(id));
    }




}
