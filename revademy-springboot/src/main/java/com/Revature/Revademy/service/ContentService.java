package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.Content;
import com.Revature.Revademy.repository.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentService {

    private final ContentRepository contentRepository;

    @Autowired
    public ContentService(ContentRepository contentRepository) {
        this.contentRepository = contentRepository;
    }



    public Content createAnnouncement(Content content) {
        return contentRepository.save(content);
    }


    public Content updateAnnouncement(Content content) {
        return contentRepository.save(content);
    }
}
