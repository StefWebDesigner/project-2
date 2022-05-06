package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.Content;
import com.Revature.Revademy.exception.GeneralException;
import com.Revature.Revademy.exception.NonExistingUserException;
import com.Revature.Revademy.repository.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public List<Content> getAllContent() {
        return contentRepository.findAll();
    }

    public String deleteContent(Integer contentId) {
        Optional <Content> content = contentRepository.findById(contentId);
            if (content.isPresent()) {
                contentRepository.deleteById(contentId);
                return "Successfull deleted";
            } else {
                throw new GeneralException("Can't find content id ");
            }
    }
}
