package com.Revature.Revademy.controller;


import com.Revature.Revademy.entities.UserStatsDto;
import com.Revature.Revademy.service.UserStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "",maxAge =3600)
@RequestMapping("/userStats")
public class UserStatsController {

    private final UserStatsService userStatsService;

    @Autowired
    public UserStatsController(UserStatsService userStatsService) {
        this.userStatsService = userStatsService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<UserStatsDto> getUserStat(@RequestParam String  username) {
        return ResponseEntity.ok(userStatsService.getUserStats(username));
    }

}
