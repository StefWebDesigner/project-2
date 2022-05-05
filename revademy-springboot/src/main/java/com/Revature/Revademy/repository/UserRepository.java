package com.Revature.Revademy.repository;

import com.Revature.Revademy.entities.AccountTypes;
import com.Revature.Revademy.entities.AgeType;
import com.Revature.Revademy.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);
    Optional<User> findByUsernameAndPassword(String username, String password);
    Optional<User> findByEmail(String email);

    @Query(value = "SELECT COUNT(account_types) FROM user_model WHERE account_types = 'ADMIN'", nativeQuery = true)
    Integer totalAdmin();

    @Query(value = "SELECT COUNT(account_types) FROM user_model WHERE account_types = 'ADMIN'", nativeQuery = true)
    Integer totalUsers();
}
