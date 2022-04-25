package com.Revature.Revademy.repository;

import com.Revature.Revademy.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
}
