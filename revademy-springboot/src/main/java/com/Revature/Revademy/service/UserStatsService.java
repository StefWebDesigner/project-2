package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.entities.UserStats;
import com.Revature.Revademy.entities.UserStatsDto;
import com.Revature.Revademy.exception.NonExistingUserException;
import com.Revature.Revademy.repository.UserRepository;
import com.Revature.Revademy.repository.UserStatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@Service
public class UserStatsService {

    private final UserStatsRepository userStatsRepository;
    private final UserRepository userRepository;

    @Autowired
    public UserStatsService(UserStatsRepository userStatsRepository, UserRepository userRepository) {
        this.userStatsRepository = userStatsRepository;
        this.userRepository = userRepository;
    }

    public UserStatsDto getUserStats(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        if(!user.isPresent()) {
            throw  new NonExistingUserException("User Doesn't Exist");
        }
       List<UserStats> userStatsList =  userStatsRepository.findByUser(user.get());
       UserStatsDto userStatsDto = new UserStatsDto();
       userStatsDto.setUser(user.get());

       double time = 0;
        for (UserStats userStat: userStatsList ){
            long until = userStat.getFromDateTime().until(userStat.getToDateTime(), ChronoUnit.MINUTES);
            time += until;
        }

        userStatsDto.setUserStats(userStatsList);
        userStatsDto.setLoggedInTime(time);
        return  userStatsDto;
    }

}
