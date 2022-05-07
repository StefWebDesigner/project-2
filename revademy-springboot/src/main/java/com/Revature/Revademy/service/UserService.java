package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.AgeType;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.entities.UserStats;
import com.Revature.Revademy.exception.GeneralException;
import com.Revature.Revademy.exception.NoEmailIdFoundExceptions;
import com.Revature.Revademy.exception.NoUserExistToDeleteException;
import com.Revature.Revademy.exception.NonExistingUserException;
import com.Revature.Revademy.exception.UnderAgeException;
import com.Revature.Revademy.repository.UserRepository;
import com.Revature.Revademy.repository.UserStatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserStatsRepository userStatsRepository;

    @Autowired
    public UserService(UserRepository userRepository, UserStatsRepository userStatsRepository) {
        this.userRepository = userRepository;
        this.userStatsRepository = userStatsRepository;
    }

    public User registerUser(User user) {
    	Optional<User> userOptional = userRepository.findByUsername(user.getUsername());
    	Optional<User> userOptional2 = userRepository.findByEmail(user.getEmail());
        if (user.getAgeType() == AgeType.UNDERAGE) {
            throw new UnderAgeException("User is underage. Hence cannot register");
        }
        else if (userOptional.isPresent()) {
        	throw new GeneralException("Username already exists");
        }
        else if(userOptional2.isPresent()) {
        	throw new GeneralException("Email already exists");
        }
        user.setCreatedDate(LocalDate.now());
        return userRepository.save(user);
    }

    public User loginUser(String username, String password) {
        Optional<User> user = userRepository.findByUsernameAndPassword(username, password);
        if (user.isPresent()) {
            UserStats userStats = new UserStats();
            userStats.setUser(user.get());
            userStats.setFromDateTime(LocalDateTime.now());
            userStatsRepository.save(userStats);

            return user.get();
        }
        throw new NonExistingUserException("User Doesn't Exist.");
    }

    public void logoutUser(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        if(!user.isPresent()) {
            throw  new NonExistingUserException("User Doesn't Exist");
        }
        List<UserStats> userStats = userStatsRepository.findByUser(user.get());
        userStats.sort(Comparator.comparing(UserStats::getFromDateTime).reversed());

        for (int i = 0; i < userStats.size(); i++) {
            if(i == 0) {
                userStats.get(i).setToDateTime(LocalDateTime.now());
                continue;
            }
            if(userStats.get(i).getToDateTime() == null) {
                LocalDateTime fromDateTime = userStats.get(i).getFromDateTime();
                userStats.get(i).setToDateTime(fromDateTime.plusMinutes(15));
            }
            userStatsRepository.saveAll(userStats);
        }
    }

    //DELETE USER
    public String deleteUser(Integer id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            userRepository.deleteById(id);
            return "User Successfully deleted";
        } else {
            throw new NoUserExistToDeleteException("No user to delete");
        }
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }
    
    public User getUserByUsername(String username) {
		Optional<User> userOptional = userRepository.findByUsername(username);
		if(userOptional.isPresent()) {
			return userOptional.get();
		}else {
			throw new NonExistingUserException("User Doesn't Exist.");
		}
	}

//    public User getUserById(Integer id) {
//        Optional<User> userOptional = userRepository.findById(id);
//        if(userOptional.isPresent()) {
//            return userOptional.get();
//        }else {
//            throw new NonExistingUserException("User Doesn't Exist.");
//        }
//    }


    public String updateUser(User user, Integer id) {
        Optional<User> userOptional = userRepository.findById(id);
        if(userOptional.isPresent()) {
        	 userRepository.save(user);
        	 return "User info updated.";
        } else {
        	throw new NonExistingUserException("User Doesn't Exist.");
        }
    }

    public Integer getTotalAdmin() {
        return userRepository.totalAdmin();

    }

    public Integer getTotalUsers() {
        return userRepository.totalUsers();
    }


}
