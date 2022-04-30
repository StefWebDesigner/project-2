package com.Revature.Revademy.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Revature.Revademy.resource.EmailMessage;
import com.Revature.Revademy.service.EmailSenderService;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class EmailSenderController {

	private final EmailSenderService emailSenderService;
	
	public EmailSenderController(EmailSenderService emailSenderService) {
		this.emailSenderService = emailSenderService;
	}
	
	@PostMapping("/send-email")
	public ResponseEntity<String> sendEmail(@RequestBody EmailMessage emailMessage) {
		this.emailSenderService.sendEmail(emailMessage.getTo(), emailMessage.getSubject(), emailMessage.getMessage());
		return ResponseEntity.ok("Success");
	}

}
