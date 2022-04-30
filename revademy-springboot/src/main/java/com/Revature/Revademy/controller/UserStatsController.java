package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.UserStats;
import com.Revature.Revademy.service.UserStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "",maxAge =3600)
@RequestMapping("/userStats")
public class UserStatsController {

    private final UserStatsService userStatsService;

    @Autowired
    public UserStatsController(UserStatsService userStatsService) {
        this.userStatsService = userStatsService;
    }

    //ATTEMPT TO TRACK TOTAL TIME ONLINE
    @RequestMapping(value = "/lifelongtimer")
    @CrossOrigin(origins = "http://localHost:3000")
    public ResponseEntity<UserStats> TotalTimeOnlineTimer(){

        return null;
    }


}
