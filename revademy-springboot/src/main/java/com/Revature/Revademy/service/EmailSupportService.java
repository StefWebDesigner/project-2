package com.Revature.Revademy.service;

import com.Revature.Revademy.repository.EmailSupportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailSupportService {

    private final EmailSupportRepository emailSupportRepository;

    @Autowired
    public EmailSupportService(EmailSupportRepository emailSupportRepository) {
        this.emailSupportRepository = emailSupportRepository;
    }

    

}
