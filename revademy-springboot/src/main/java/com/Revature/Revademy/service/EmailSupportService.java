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

    public EmailSupport updateEmail(EmailSupport emailSupport, Integer emailId, Integer id) {

        //TARGET AND FIND EMAILID
            Optional<EmailSupport> emailSupportOptional = emailSupportRepository.findById(emailId);
            if(emailSupportOptional.isPresent()) {
                if(emailSupportOptional.get().getEmailId().equals(emailId)) {
                    //I WANT IT TO RETURN THE PAST EMAIL FROM THE CONVERSATION
                    emailSupportRepository.findById(emailId);
                    //I WANT IT TO THEN ALLOW THEM TO SAVE THEIR RESPONSCE
                    Optional<User> user = userRepository.findById(id);
                    if(user.isPresent()) {
                        EmailSupport emailSupportModel = emailSupportRepository.save(emailSupport);
                        return emailSupportModel;
                    } else {
                        throw new NonExistingUserException("No user was found");
                    }
                } else {
                    throw new NoEmailIdFoundExceptions("No email id was found.");
                }
            } else {
                throw new NoEmailIdFoundExceptions("No email id was found.");
            }
    }
}
