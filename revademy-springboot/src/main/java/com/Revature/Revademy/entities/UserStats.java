package com.Revature.Revademy.entities;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "UserStatsModel")
public class UserStats {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userStatsId;
<<<<<<< HEAD
    private LocalTime lifetime;
    private LocalTime timeOnlineTracker;
    @OneToOne
=======
    private LocalDateTime fromDateTime;
    private LocalDateTime toDateTime;
    @ManyToOne
>>>>>>> main
    User user;

    public Integer getUserStatsId() {
        return userStatsId;
    }

    public void setUserStatsId(Integer userStatsId) {
        this.userStatsId = userStatsId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getFromDateTime() {
        return fromDateTime;
    }

    public void setFromDateTime(LocalDateTime fromDateTime) {
        this.fromDateTime = fromDateTime;
    }

    public LocalDateTime getToDateTime() {
        return toDateTime;
    }

    public void setToDateTime(LocalDateTime toDateTime) {
        this.toDateTime = toDateTime;
    }
}
