package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.EmailSupport;
import com.Revature.Revademy.entities.User;
import com.Revature.Revademy.exception.NoEmailIdFoundExceptions;
import com.Revature.Revademy.exception.NonExistingUserException;
import com.Revature.Revademy.repository.EmailSupportRepository;
import com.Revature.Revademy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmailSupportService {

    private final EmailSupportRepository emailSupportRepository;
    private final UserRepository userRepository;

    @Autowired
    public EmailSupportService(EmailSupportRepository emailSupportRepository, UserRepository userRepository) {
        this.emailSupportRepository = emailSupportRepository;
        this.userRepository = userRepository;
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

    //TO UDPATE EMAIL
    public EmailSupport updateEmail(EmailSupport emailSupport) {
        Optional<EmailSupport> emailSupportOptional = emailSupportRepository.findById(emailSupport.getPreviousMailId());
        if(emailSupportOptional.isPresent()) {
            String oldBody = emailSupportOptional.get().getBody();
            String newBody = emailSupport.getBody();

            String body = newBody + "\n Previous Email : ------------------------ \n" + oldBody;
            emailSupport.setBody(body);
           return emailSupportRepository.save(emailSupport);
        } else {
            throw  new NoEmailIdFoundExceptions("Invalid email ID");
        }
    }
}
