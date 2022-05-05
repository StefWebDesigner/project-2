package com.Revature.Revademy.controller;

import org.springframework.web.bind.annotation.RestController;

import com.Revature.Revademy.entities.ResetTokens;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.service.ForgotService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin(maxAge = 3600, origins = "")
@RequestMapping("/forgot")
public class ForgotPasswordController {
	private final ForgotService forgotService;
	
	@Autowired
    public ForgotPasswordController(ForgotService forgotService) {
        this.forgotService = forgotService;
    }
	

	@RequestMapping(method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<ResetTokens> forgot(@RequestParam String email){
		return ResponseEntity.ok(forgotService.forgot(email));
	}
	

	@RequestMapping(value = "/{tokenId}", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<ResetTokens> getResetTokensById(@PathVariable Integer tokenId){
		return ResponseEntity.ok(forgotService.getResetTokensById(tokenId));
	}

	@RequestMapping(value = "/reset", method = RequestMethod.POST)
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<String> resetPassword(@RequestParam String password, @RequestParam String token){
		return ResponseEntity.ok(forgotService.resetPassword(password, token));
	}
}