package com.Revature.Revademy.controller;

import com.Revature.Revademy.service.EmailSupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "", maxAge = 3600)
@RequestMapping("/email")
public class EmailSupportController {

    private final EmailSupportService emailSupportService;

    @Autowired
    public EmailSupportController(EmailSupportService emailSupportService) {
        this.emailSupportService = emailSupportService;
    }


}
