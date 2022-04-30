package com.Revature.Revademy.impl;

import org.springframework.stereotype.Service;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import com.Revature.Revademy.service.EmailSenderService;

@Service
public class EmailSenderServiceImpl implements EmailSenderService {

	private final JavaMailSender mailSender;
	
	public EmailSenderServiceImpl(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}
	
	
	@Override
	public void sendEmail(String to, String subject, String message) {
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setFrom("ronald.mcdonald.project1@gmail.com");
		simpleMailMessage.setTo(to);
		simpleMailMessage.setSubject(subject);
		simpleMailMessage.setText(message);
		
		this.mailSender.send(simpleMailMessage);
		
	}

}
