package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.EmailSupport;
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

    // CREATE EMAIL
    public EmailSupport createEmail(EmailSupport emailSupport) {
        return emailSupportRepository.save(emailSupport);
    }
}
