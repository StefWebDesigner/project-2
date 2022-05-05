package com.Revature.Revademy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Revature.Revademy.entities.GamePlays;

@Repository
public interface GamePlaysRepository extends JpaRepository<GamePlays, Integer> {
	
	Optional<GamePlays> findByAnimalQuizPlays(Integer animalQuizPlays);
	Optional<GamePlays> findByColorQuizPlays(Integer colorQuizPlays);
	Optional<GamePlays> findByHangmanPlays(Integer hangmanPlays);
	Optional<GamePlays> findByMatchingPlays(Integer matchingPlays);
	Optional<GamePlays> findBySoundQuizPlays(Integer soundQuizPlays);
}
