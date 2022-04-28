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

//    CREATE EMAIL
//    http://localhost:8080/emailsupport/create
    @RequestMapping (value = "/create", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<EmailSupport> createEmail(@RequestBody EmailSupport emailSupport) {
        return ResponseEntity.ok(emailSupportService.createEmail(emailSupport));
    }

    //GET ALL EMAILS
//    http://localhost:8080/emailsupport/all
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<EmailSupport>> getAllEmails() {
        return ResponseEntity.ok(emailSupportService.getAllEmails());
}

    //TO SELECT EMAIL BY ID


    //TO DETELE AN EMAIL
//    http://localhost:8080/emailsupport/delete?emailId=13
    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> deleteEmail(@RequestParam Integer emailId) {
        return ResponseEntity.ok(emailSupportService.deleteEmail(emailId));
    }

    //TO UPDATE A EMAIL


}
