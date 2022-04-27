package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.AccountTypes;
import com.Revature.Revademy.entities.AgeType;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.exception.NonExistingUserException;
import com.Revature.Revademy.exception.UnderAgeException;
import com.Revature.Revademy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    //REGISTER A NEW USER
    public User registerUser(User user) {
        if(user.getAgeType() == AgeType.UNDERAGE) {
            throw new UnderAgeException("User is underage. Hence cannot register");
        }
        user.setCreatedDate(LocalDate.now());
        user.setLifetime(LocalTime.now());
        return userRepository.save(user);
    }


    //LOGIN AN EXISITING USER
    public User loginUser(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            if (user.get().getPassword().equals(password)) {
                return user.get();

            }
            //add the tracking
        }
        throw new NonExistingUserException("User Doesn't Exist.");
    }

//DELETE





}
