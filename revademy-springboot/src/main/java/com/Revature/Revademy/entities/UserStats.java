package com.Revature.Revademy.entities;

import javax.persistence.*;
import java.time.LocalTime;

@Entity
@Table(name = "UserStatsModel")
public class UserStats {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userStatsId;
    @Column
    private LocalTime lifetime;
    @Column
    private LocalTime timeOnlineTracker;
    @OneToOne
    User user;

    public Integer getUserStatsId() {
        return userStatsId;
    }

    public void setUserStatsId(Integer userStatsId) {
        this.userStatsId = userStatsId;
    }

    public LocalTime getLifetime() {
        return lifetime;
    }

    public void setLifetime(LocalTime lifetime) {
        this.lifetime = lifetime;
    }

    public LocalTime getTimeOnlineTracker() {
        return timeOnlineTracker;
    }

    public void setTimeOnlineTracker(LocalTime timeOnlineTracker) {
        this.timeOnlineTracker = timeOnlineTracker;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
