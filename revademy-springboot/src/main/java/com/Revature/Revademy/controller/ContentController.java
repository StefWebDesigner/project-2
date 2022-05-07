package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.Content;
import com.Revature.Revademy.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600, origins = "")
@RequestMapping("/announcement")
public class ContentController {

    private final ContentService contentService;

    @Autowired
    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }



    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Content> createAnnouncement(@RequestBody Content content) {
        return ResponseEntity.ok(contentService.createAnnouncement(content));
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Content>> getAllContent() {
        return ResponseEntity.ok(contentService.getAllContent());
    }

    @RequestMapping(value = "/deletePost", method = RequestMethod.DELETE)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> deleteContent(@RequestParam Integer contentId) {
        return ResponseEntity.ok(contentService.deleteContent(contentId));
    }



    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Content> updateAnnouncement(@RequestBody Content content) {
        return ResponseEntity.ok(contentService.updateAnnouncement(content));
    }





}
