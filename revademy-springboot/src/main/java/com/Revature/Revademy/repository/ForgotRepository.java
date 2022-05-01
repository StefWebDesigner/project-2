package com.Revature.Revademy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Revature.Revademy.entities.ResetTokens;

@Repository
public interface ForgotRepository extends JpaRepository<ResetTokens, Integer> {
	
	Optional<ResetTokens> findByEmail(String email);
	Optional<ResetTokens> findByToken(String token);

}
