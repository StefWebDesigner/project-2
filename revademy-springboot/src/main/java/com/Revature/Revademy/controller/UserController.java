package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.AccountTypes;
import com.Revature.Revademy.entities.AgeType;
import com.Revature.Revademy.entities.EmailSupport;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;
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
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> loginUser(@RequestParam String username, @RequestParam String password) {
        User user = userService.loginUser(username, password);
        return ResponseEntity.ok(user);
    }

    //DELETE USER
//    http://localhost:8080/user/delete?id=3
    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> deleteUser(@RequestParam Integer id) {
        return ResponseEntity.ok(userService.deleteUser(id));
    }

    //GET ALL USER
    //http://localhost:8080/user/all
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<User>> getAllUser() {
        return ResponseEntity.ok(userService.getAllUser());
    }

    //GET CURRENT USER INFO
    //http://localhost:8080/user/{username}
    @RequestMapping(value="/{username}", method=RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username){
    	return ResponseEntity.ok(userService.getUserByUsername(username));
    }
    
    //UPDATE USER 
    //http://localhost:8080/user/update?id=2
    @RequestMapping(value="/update", method=RequestMethod.PUT)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> updateUser(@RequestBody User user, @RequestParam  Integer id){
        return ResponseEntity.ok(userService.updateUser(user, id));
    }


//    @RequestMapping(value = "/all", method = RequestMethod.GET)
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<List<User>> getTotalAdmin() {
//        return ResponseEntity.ok(userService.getTotalAdmin());
//    }


    @RequestMapping(value="/admin", method=RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<User>> getTotalAdmin() {
        return ResponseEntity.ok(userService.getTotalAdmin());
    }
//
//    }

}


