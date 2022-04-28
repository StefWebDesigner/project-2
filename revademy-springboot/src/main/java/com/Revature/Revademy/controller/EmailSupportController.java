package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.EmailSupport;
import com.Revature.Revademy.service.EmailSupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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


}
