package com.Revature.Revademy.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Revature.Revademy.entities.GamePlays;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.exception.GeneralException;
import com.Revature.Revademy.repository.ForgotRepository;
import com.Revature.Revademy.repository.GamePlaysRepository;
import com.Revature.Revademy.repository.UserRepository;

@Service
public class GamePlaysService {
	
	private final GamePlaysRepository gamePlaysRepository;
	
	@Autowired
    public GamePlaysService(GamePlaysRepository gamePlaysRepository) {
        this.gamePlaysRepository = gamePlaysRepository;
    }
	
	//Update Animal Quiz Plays
	public GamePlays updateAnimalQuizPlays(Integer animalQuizPlays) {
		Optional<GamePlays> userOptional = gamePlaysRepository.findById(1);
		if(userOptional.isPresent()) {
			GamePlays gamePlays = userOptional.get();
			Integer totalPlays = userOptional.get().getAnimalQuizPlays();
			gamePlays.setAnimalQuizPlays(++totalPlays);
			return gamePlaysRepository.save(gamePlays);
		} else {
			throw new GeneralException("Animal Quiz Plays Not Found");
		}
		
	}
	
	//Update Color Quiz Plays
		public GamePlays updateColorQuizPlays(Integer colorQuizPlays) {
			Optional<GamePlays> userOptional = gamePlaysRepository.findById(1);
			if(userOptional.isPresent()) {
				GamePlays gamePlays = userOptional.get();
				Integer totalPlays = userOptional.get().getColorQuizPlays();
				gamePlays.setColorQuizPlays(totalPlays + colorQuizPlays);
				return gamePlaysRepository.save(gamePlays);
			} else {
				throw new GeneralException("Color Quiz Plays Not Found");
			}
			
		}
		
		//Update Sound Quiz Plays
				public GamePlays updateSoundQuizPlays(Integer soundQuizPlays) {
					Optional<GamePlays> userOptional = gamePlaysRepository.findById(1);
					if(userOptional.isPresent()) {
						GamePlays gamePlays = userOptional.get();
						Integer totalPlays = userOptional.get().getSoundQuizPlays();
						gamePlays.setSoundQuizPlays(totalPlays + soundQuizPlays);
						return gamePlaysRepository.save(gamePlays);
					} else {
						throw new GeneralException("Sound Quiz Plays Not Found");
					}
					
				}
				
				//Update Hangman Plays
				public GamePlays updateHangmanPlays(Integer hangmanPlays) {
					Optional<GamePlays> userOptional = gamePlaysRepository.findById(1);
					if(userOptional.isPresent()) {
						GamePlays gamePlays = userOptional.get();
						Integer totalPlays = userOptional.get().getHangmanPlays();
						gamePlays.setHangmanPlays(totalPlays + hangmanPlays);
						return gamePlaysRepository.save(gamePlays);
					} else {
						throw new GeneralException("Hangman Plays Not Found");
					}
					
				}
				
				//Update Matching Plays
				public GamePlays updateMatchingPlays(Integer matchingPlays) {
					Optional<GamePlays> userOptional = gamePlaysRepository.findById(1);
					if(userOptional.isPresent()) {
						GamePlays gamePlays = userOptional.get();
						Integer totalPlays = userOptional.get().getMatchingPlays();
						gamePlays.setMatchingPlays(totalPlays + matchingPlays);
						return gamePlaysRepository.save(gamePlays);
					} else {
						throw new GeneralException("Matching Plays Not Found");
					}
					
				}

	public Integer getTotalSoundQuiz() { return gamePlaysRepository.countTotalSoundquiz();
	}

	public Integer getTotalMatchingQuiz() { return gamePlaysRepository.countTotalMatchingquiz();
	}

	public Integer getTotalHangmanQuiz() { return gamePlaysRepository.countTotalHangmanquiz();
	}

	public Integer getTotalColorQuiz() { return gamePlaysRepository.countTotalColorquiz();
	}

	public Integer getTotalAnimalQuiz() { return gamePlaysRepository.countTotalAnimalquiz();
	}
}
