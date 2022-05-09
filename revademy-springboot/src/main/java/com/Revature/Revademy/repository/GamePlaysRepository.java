package com.Revature.Revademy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Revature.Revademy.entities.GamePlays;

@Repository
public interface GamePlaysRepository extends JpaRepository<GamePlays, Integer> {
	
	Optional<GamePlays> findByAnimalQuizPlays(Integer animalQuizPlays);
	Optional<GamePlays> findByColorQuizPlays(Integer colorQuizPlays);
	Optional<GamePlays> findByHangmanPlays(Integer hangmanPlays);
	Optional<GamePlays> findByMatchingPlays(Integer matchingPlays);
	Optional<GamePlays> findBySoundQuizPlays(Integer soundQuizPlays);


	@Query(value = "SELECT animal_quiz_plays FROM game_plays_model", nativeQuery = true)
	Integer countTotalAnimalquiz();

	@Query(value = "SELECT color_quiz_plays FROM game_plays_model", nativeQuery = true)
	Integer countTotalColorquiz();

	@Query(value = "SELECT hangman_plays FROM game_plays_model", nativeQuery = true)
	Integer countTotalHangmanquiz();


	@Query(value = "SELECT matching_plays FROM game_plays_model", nativeQuery = true)
	Integer countTotalMatchingquiz();

	@Query(value = "SELECT sound_quiz_plays FROM game_plays_model", nativeQuery = true)
	Integer countTotalSoundquiz();


}
