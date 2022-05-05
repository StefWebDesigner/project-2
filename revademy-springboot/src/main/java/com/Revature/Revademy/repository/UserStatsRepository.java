package com.Revature.Revademy.repository;

import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.entities.UserStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserStatsRepository extends JpaRepository<UserStats, Integer> {
    List<UserStats> findByUser(User user);
}
