package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.Users;
import com.Revature.Revademy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public Users registerUser(Users users) {
        //CREATE A CHECK FOR AGE => for later

       return userRepository.save(users);
    }
}
