package com.Revature.Revademy.service;

import java.util.Optional;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.Revature.Revademy.entities.ResetTokens;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.exception.GeneralException;
import com.Revature.Revademy.exception.NonExistingUserException;
import com.Revature.Revademy.repository.ForgotRepository;
import com.Revature.Revademy.repository.UserRepository;

@Service
public class ForgotService {
	
	private final ForgotRepository forgotRepository;
	private final UserRepository userRepository;
	
	
	
	@Autowired
    public ForgotService(ForgotRepository forgotRepository, UserRepository userRepository) {
        this.forgotRepository = forgotRepository;
        this.userRepository = userRepository;
    }
	
	//Checks if user exists by email and then creates a random token and adds the email and token to forgotRepository
	 public ResetTokens forgot(String email) {

		 		Optional<User> userOptional = userRepository.findByEmail(email);
		 		if(userOptional.isPresent()) {
		 			Optional<ResetTokens> userOptional2 = forgotRepository.findByEmail(email);
		 			if(userOptional2.isPresent()) {
		 				String token = RandomStringUtils.randomAlphanumeric(10);
		 				ResetTokens resetTokens = userOptional2.get();
		 				resetTokens.setToken(token);
		 				return forgotRepository.save(resetTokens);
		 			} else {
		 			String token = RandomStringUtils.randomAlphanumeric(10);
		            ResetTokens resetToken = new ResetTokens(email, token);
		            return  forgotRepository.save(resetToken);
		 			}
		      
		 		} else {
		 			 throw new NonExistingUserException("No User Matches This Email"); //make general exception
		 		}		 			            	             
		 		
	    }

	
	//get a user by token id
	public ResetTokens getResetTokensById(Integer tokenId) {
		Optional<ResetTokens> tokenOptional = forgotRepository.findById(tokenId);
		if(tokenOptional.isPresent()) {
			return tokenOptional.get();
		}else {
			throw new GeneralException("Invalid Token.");
		}
	}
	
	//Finds the token and then email and changes password of user corresponding to that email
	public String resetPassword(String password, String token) {
		Optional<ResetTokens> tokenOptional = forgotRepository.findByToken(token);
		if(tokenOptional.isPresent()) {
			String email = tokenOptional.get().getEmail();
			Optional<User> userOptional = userRepository.findByEmail(email);
			if(userOptional.isPresent()) {
				User user = userOptional.get();
				user.setPassword(password);
				userRepository.save(user);
				return "Password Reset";
			} else {
				throw new NonExistingUserException("User Doesn't Exist.");
			}
		} else {
			throw new GeneralException("Invalid Token.");
		}
	}
	 
}
