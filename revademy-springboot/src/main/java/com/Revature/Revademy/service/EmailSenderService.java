package com.Revature.Revademy.service;

public interface EmailSenderService {
	void sendEmail(String to, String subject, String message);
}
