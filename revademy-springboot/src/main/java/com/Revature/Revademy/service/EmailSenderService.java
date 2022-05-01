package com.Revature.Revademy.service;

public interface EmailSenderService {
	public void sendEmail(String to, String subject, String message);
}