package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.AccountTypes;
import com.Revature.Revademy.entities.User;
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


    //REGISTER A NEW USER
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    //LOGIN AN EXISITING USER
    public User loginUser(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            if (user.get().getPassword().equals(password)) {
                return user.get();
            }
        }
        return null;
    }

    //i'M TOO TRIED TO WORK ON THIS ->> TO BE RESUMED
//    think about tracking too
    public User deleteUser(Integer id, AccountTypes accountTypes) {
        Optional <User> userModel = userRepository.findById(id);
        if(userModel.isPresent()) {
            if(userModel.get().getAccountTypes() == AccountTypes.ADMIN) {
                Optional <User> user = userRepository.findById(id) {
                    if(user.isPresent()) {
                        userRepository.delete(user.get());
                        return "Successfully deleted user";
                    } else {
                        return "No user was matched with id";
                    }
                } else {
                    return "Need admin permissions";
                }
            } else {
                return "No user matched with ID";
            }
    }
}
