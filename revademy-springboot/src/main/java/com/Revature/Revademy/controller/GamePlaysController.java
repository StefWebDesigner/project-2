package com.Revature.Revademy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Revature.Revademy.entities.GamePlays;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.service.GamePlaysService;
import com.Revature.Revademy.service.UserService;

@CrossOrigin(origins = "", maxAge = 3600)
@RestController
@RequestMapping("/gameplays")
public class GamePlaysController {
	
	private final GamePlaysService gamePlaysService;
	
	@Autowired
    public GamePlaysController(GamePlaysService gamePlaysService) {
        this.gamePlaysService = gamePlaysService;
    }
	
	//  http://localhost:8080/gameplays/animalquiz?animalQuizPlays=1
	@RequestMapping(value = "/animalquiz", method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<GamePlays> updateAnimalQuizPlays(@RequestParam Integer animalQuizPlays) {
        return ResponseEntity.ok(gamePlaysService.updateAnimalQuizPlays(animalQuizPlays));
    }
	
//  http://localhost:8080/gameplays/colorquiz?colorQuizPlays=1
	@RequestMapping(value = "/colorquiz", method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<GamePlays> updateColorQuizPlays(@RequestParam Integer colorQuizPlays) {
        return ResponseEntity.ok(gamePlaysService.updateColorQuizPlays(colorQuizPlays));
    }
	
//  http://localhost:8080/gameplays/soundquiz?soundQuizPlays=1
	@RequestMapping(value = "/soundquiz", method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<GamePlays> updatesoundQuizPlays(@RequestParam Integer soundQuizPlays) {
        return ResponseEntity.ok(gamePlaysService.updateSoundQuizPlays(soundQuizPlays));
    }
	
//  http://localhost:8080/gameplays/hangman?hangmanPlays=1
	@RequestMapping(value = "/hangman", method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<GamePlays> updateHangmanPlays(@RequestParam Integer hangmanPlays) {
        return ResponseEntity.ok(gamePlaysService.updateHangmanPlays(hangmanPlays));
    }
	
//	http://localhost:8080/gameplays/matching?matchingPlays=1
		@RequestMapping(value = "/matching", method = RequestMethod.GET)
		@CrossOrigin(origins = "http://localhost:3000")
	    public ResponseEntity<GamePlays> updatematchingPlays(@RequestParam Integer matchingPlays) {
	        return ResponseEntity.ok(gamePlaysService.updateMatchingPlays(matchingPlays));
	    }

}
