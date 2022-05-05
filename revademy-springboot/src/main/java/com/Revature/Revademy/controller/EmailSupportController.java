package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.EmailSupport;
import com.Revature.Revademy.service.EmailSupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "", maxAge = 3600)
@RequestMapping("/emailsupport")
public class EmailSupportController {

    private final EmailSupportService emailSupportService;

    @Autowired
    public EmailSupportController(EmailSupportService emailSupportService) {
        this.emailSupportService = emailSupportService;
    }

    @RequestMapping (value = "/create", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<EmailSupport> createEmail(@RequestBody EmailSupport emailSupport) {
        return ResponseEntity.ok(emailSupportService.createEmail(emailSupport));
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<EmailSupport>> getAllEmails() {
        return ResponseEntity.ok(emailSupportService.getAllEmails());
}

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> deleteEmail(@RequestParam Integer emailId) {
        return ResponseEntity.ok(emailSupportService.deleteEmail(emailId));
    }

    @RequestMapping(value="/update", method=RequestMethod.PUT)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<EmailSupport> updateEmail(@RequestBody EmailSupport emailSupport){
        return ResponseEntity.ok(emailSupportService.updateEmail(emailSupport));
    }

    @RequestMapping(value = "/{emailId}", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<EmailSupport>getEmailbyId(@PathVariable Integer emailId){
        return ResponseEntity.ok(emailSupportService.getEmailbyId(emailId));
    }



}
