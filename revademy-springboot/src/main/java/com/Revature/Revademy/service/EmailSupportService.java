package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.EmailSupport;
import com.Revature.Revademy.exception.NoEmailIdFoundExceptions;
import com.Revature.Revademy.repository.EmailSupportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public List<EmailSupport> getAllEmails() {
        return emailSupportRepository.findAll();
    }

    public String deleteEmail(Integer emailId) {
        Optional<EmailSupport> emailSupport = emailSupportRepository.findById(emailId);
        if(emailSupport.isPresent()) {
            emailSupportRepository.deleteById(emailId);
            return "Email was successfully deleted";
        } else {
            throw new NoEmailIdFoundExceptions("No matching email Id to delete!");
        }
    }
}
