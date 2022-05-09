package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.*;
import com.Revature.Revademy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600, origins = "")
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user));
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> loginUser(@RequestParam String username, @RequestParam String password) {
        User user = userService.loginUser(username, password);
        return ResponseEntity.ok(user);
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> logoutUser(@RequestParam String username)
    {
        userService.logoutUser(username);
        return ResponseEntity.ok("Logged Out");
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> deleteUser(@RequestParam Integer id) {
        return ResponseEntity.ok(userService.deleteUser(id));
    }


    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<User>> getAllUser() {
        return ResponseEntity.ok(userService.getAllUser());
    }


    @RequestMapping(value = "/username/{username}", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        return ResponseEntity.ok(userService.getUserByUsername(username));
    }
//    @RequestMapping(value = "/getuserbyIdrequestWorkplease/{id}", method = RequestMethod.GET)
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
//        return ResponseEntity.ok(userService.getUserById(id));
//    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> updateUser(@RequestBody User user, @RequestParam Integer id) {
        return ResponseEntity.ok(userService.updateUser(user, id));

    }

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalAdmin() {
        return ResponseEntity.ok(userService.getTotalAdmin());
    }

    @RequestMapping(value = "/userCount", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalUsers() {
        return ResponseEntity.ok(userService.getTotalUsers());
    }


}

