package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.AccountTypes;
import com.Revature.Revademy.entities.AgeType;
import com.Revature.Revademy.entities.EmailSupport;
import com.Revature.Revademy.entities.ResetTokens;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.exception.GeneralPasswordResetException;
import com.Revature.Revademy.exception.NoEmailIdFoundExceptions;
import com.Revature.Revademy.exception.NoUserExistToDeleteException;
import com.Revature.Revademy.exception.NonExistingUserException;
import com.Revature.Revademy.exception.UnderAgeException;
import com.Revature.Revademy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

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
        if (user.getAgeType() == AgeType.UNDERAGE) {
            throw new UnderAgeException("User is underage. Hence cannot register");
        }
        user.setCreatedDate(LocalDate.now());
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

    //DETELE USER
    public String deleteUser(Integer id) {
                Optional<User> userOptional = userRepository.findById(id);
                if (userOptional.isPresent()) {
                    userRepository.deleteById(id);
                    return "User Successfully deleted";
                } else {
                    throw new NoUserExistToDeleteException("No user to delete");
                }
    }

    //GET ALL USERS
    public List<User> getAllUser() {
        return userRepository.findAll();
    }
    
    //GET A USER BY USERNAME
    public User getUserByUsername(String username) {
		Optional<User> userOptional = userRepository.findByUsername(username);
		if(userOptional.isPresent()) {
			return userOptional.get();
		}else {
			throw new NonExistingUserException("User Doesn't Exist.");
		}
	}
    
    //UPDATE A USER 
    public String updateUser(User user, Integer id) {
        Optional<User> userOptional = userRepository.findById(id);
        if(userOptional.isPresent()) {
        	 userRepository.save(user);
        	 return "User info updated.";
        } else {
        	throw new NonExistingUserException("User Doesn't Exist.");
        }
    }

}
