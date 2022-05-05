package com.Revature.Revademy.entities;

import java.util.List;

public class UserStatsDto {
    private  User user;
    private double loggedInTime;
    private List<UserStats> userStats;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public double getLoggedInTime() {
        return loggedInTime;
    }

    public void setLoggedInTime(double loggedInTime) {
        this.loggedInTime = loggedInTime;
    }

    public List<UserStats> getUserStats() {
        return userStats;
    }

    public void setUserStats(List<UserStats> userStats) {
        this.userStats = userStats;
    }
}
