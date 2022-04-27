package com.Revature.Revademy.service;

import com.Revature.Revademy.repository.UserStatsRepository;
import org.hibernate.internal.build.AllowPrintStacktrace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserStatsService {

    private final UserStatsRepository userStatsRepository;

    @Autowired
    public UserStatsService(UserStatsRepository userStatsRepository) {
        this.userStatsRepository = userStatsRepository;
    }


    public Object TotalTimeOnlineTimer() {

        /*
        PART 1:
        - GETTOTTALTIMER & THEN HAVE IT RUN

        PART 2:
        - SET A TRIGGLE TO STOP IT IT
            & THEN SETTIMER(DATA)
         - SETLONGTIMEONEINE(GETOTATL TIEM + SETTIMMER(DATA)
         */

        return null;
    }

//
//    public User registerUser(User user) {
//        if (user.getAgeType() == AgeType.UNDERAGE) {
//            throw new UnderAgeException("User is underage. Hence cannot register");
//        }
//        user.setCreatedDate(LocalDate.now());
//        user.setLifetime(LocalTime.now());
//        return userRepository.save(user);
//    }



}
