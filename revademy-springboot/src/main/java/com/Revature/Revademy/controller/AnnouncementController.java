package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.Content;
import com.Revature.Revademy.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/announcement")
public class AnnouncementController {

    private final ContentService contentService;

    @Autowired
    public AnnouncementController(ContentService contentService) {
        this.contentService = contentService;
    }



    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Content> createAnnouncement(@RequestBody Content content) {
        return ResponseEntity.ok(contentService.createAnnouncement(content));
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Content> updateAnnouncement(@RequestBody Content content) {
        return ResponseEntity.ok(contentService.updateAnnouncement(content));
    }





}
